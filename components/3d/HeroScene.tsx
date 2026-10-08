"use client";

import { useEffect, useRef, useState } from "react";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mobileDevice = window.innerWidth < 768;
    setIsMobile(mobileDevice);

    if (mobileDevice) {
      return;
    }

    let animId: number = 0;
    let isDisposed = false;
    let isVisible = true;

    async function initThree() {
      const container = containerRef.current;
      if (!container || isDisposed) return;

      const THREE = await import("three");
      if (isDisposed || !container) return;

      const width = container.clientWidth || 340;
      const height = container.clientHeight || 340;

      // 1. Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
      camera.position.z = 4.8;

      // 2. High-Performance Renderer with capped pixel ratio (avoids 4K framebuffer overhead)
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      container.appendChild(renderer.domElement);

      const globeGroup = new THREE.Group();
      scene.add(globeGroup);

      const radius = 1.45;

      // 3. Inner Dark Core
      const coreGeo = new THREE.SphereGeometry(radius * 0.985, 24, 24);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x08080a,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      globeGroup.add(coreMesh);

      // 4. Optimized Dotted Matrix (900 points: visually dense & sharp, 60% less compute)
      const dotCount = 900;
      const positions = new Float32Array(dotCount * 3);
      const colors = new Float32Array(dotCount * 3);
      const goldenRatio = (1 + Math.sqrt(5)) / 2;

      for (let i = 0; i < dotCount; i++) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);

        positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = radius * Math.cos(phi);
        positions[i * 3 + 2] = radius * Math.sin(theta) * Math.sin(phi);

        const b = 0.7 + Math.random() * 0.3;
        colors[i * 3] = b;
        colors[i * 3 + 1] = b;
        colors[i * 3 + 2] = b;
      }

      const dotsGeo = new THREE.BufferGeometry();
      dotsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      dotsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const dotsMat = new THREE.PointsMaterial({
        size: 0.042,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });
      const dotsMesh = new THREE.Points(dotsGeo, dotsMat);
      globeGroup.add(dotsMesh);

      // 5. Orbital Outer Ring
      const orbitGeo = new THREE.RingGeometry(radius * 1.2, radius * 1.205, 48);
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15,
      });
      const orbitMesh = new THREE.LineLoop(orbitGeo, orbitMat);
      orbitMesh.rotation.x = Math.PI / 3;
      orbitMesh.rotation.y = Math.PI / 6;
      globeGroup.add(orbitMesh);

      // 6. Beacon Nodes
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const beaconGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const nodePositions = [
        { lat: -6.2, lon: 106.8 }, // Jakarta
        { lat: 1.35, lon: 103.8 }, // Singapore
        { lat: 35.67, lon: 139.65 }, // Tokyo
      ];

      nodePositions.forEach((pos) => {
        const latRad = (pos.lat * Math.PI) / 180;
        const lonRad = ((pos.lon + 180) * Math.PI) / 180;
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.set(
          -radius * 1.02 * Math.cos(latRad) * Math.cos(lonRad),
          radius * 1.02 * Math.sin(latRad),
          radius * 1.02 * Math.cos(latRad) * Math.sin(lonRad)
        );
        globeGroup.add(beacon);
      });

      // 7. Interactive Physics (Throttled mouse tracking)
      let targetX = 0;
      let targetY = 0;
      let mouseX = 0;
      let mouseY = 0;
      let rect = container.getBoundingClientRect();

      const handleMouseMove = (e: MouseEvent) => {
        if (!isVisible) return;
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 0.35;
        targetY = y * 0.3;
      };

      const handleResize = () => {
        if (!container) return;
        rect = container.getBoundingClientRect();
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });

      // 8. IntersectionObserver: Pause render loop when scrolled off-screen!
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animId && !isDisposed) {
            animate();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      // 9. Animation Loop
      globeGroup.rotation.x = 0.25;
      globeGroup.rotation.y = 1.2;

      const animate = () => {
        if (isDisposed || !isVisible) {
          animId = 0;
          return;
        }
        animId = requestAnimationFrame(animate);

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        globeGroup.rotation.y += 0.003;
        globeGroup.rotation.x = 0.25 + mouseY * 0.35;
        globeGroup.rotation.z = -mouseX * 0.15;
        orbitMesh.rotation.z += 0.0015;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        observer.disconnect();
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);

        coreGeo.dispose();
        coreMat.dispose();
        dotsGeo.dispose();
        dotsMat.dispose();
        orbitGeo.dispose();
        orbitMat.dispose();
        beaconGeo.dispose();
        beaconMat.dispose();
        renderer.dispose();

        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    let cleanupFn: (() => void) | undefined;
    initThree().then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      isDisposed = true;
      if (animId) cancelAnimationFrame(animId);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  // Lightweight Mobile Hardware-Accelerated CSS Spatial Globe
  if (isMobile) {
    return (
      <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[340px] mx-auto flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-[#08080a] via-[#101016] to-[#181822] border border-white/10 shadow-[0_0_40px_rgba(245,158,11,0.06)] flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border border-dashed border-white/20 animate-[spin_50s_linear_infinite]" />
          <div className="absolute top-9 right-9 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_#f59e0b] animate-ping" />
            <span className="absolute w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
          </div>
        </div>
        <div className="absolute w-60 h-60 rounded-full border border-white/10 animate-[spin_24s_linear_infinite] [transform:rotateX(68deg)_rotateY(15deg)]" />
        <div className="absolute w-72 h-72 rounded-full border border-dashed border-amber-500/20 animate-[spin_36s_linear_infinite_reverse] [transform:rotateX(74deg)_rotateY(-25deg)]" />
      </div>
    );
  }

  // Desktop Interactive Three.js WebGL Container
  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[340px] sm:max-w-[420px] mx-auto pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}
