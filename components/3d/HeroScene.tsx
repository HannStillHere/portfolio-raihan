"use client";

import { useEffect, useRef } from "react";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let isDisposed = false;

    async function initThree() {
      const container = containerRef.current;
      if (!container || isDisposed) return;

      const THREE = await import("three");
      if (isDisposed || !container) return;

      const width = container.clientWidth || 340;
      const height = container.clientHeight || 340;

      // 1. Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 4.8;

      // 2. WebGL Renderer (High-Performance, Transparent)
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const globeGroup = new THREE.Group();
      scene.add(globeGroup);

      const radius = 1.45;

      // 3. Inner Dark Occlusion Core (Hides rear points for crisp depth)
      const coreGeo = new THREE.SphereGeometry(radius * 0.985, 32, 32);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x08080a,
        transparent: true,
        opacity: 0.94,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      globeGroup.add(coreMesh);

      // 4. Monochrome Dotted Matrix Surface (Fibonacci Sphere Distribution)
      const isMobile = window.innerWidth < 768;
      const dotCount = isMobile ? 1200 : 2200;
      const positions = new Float32Array(dotCount * 3);
      const colors = new Float32Array(dotCount * 3);

      const goldenRatio = (1 + Math.sqrt(5)) / 2;

      for (let i = 0; i < dotCount; i++) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(theta) * Math.sin(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Subtle gradient white-silver brightness variation
        const brightness = 0.65 + Math.random() * 0.35;
        colors[i * 3] = brightness;
        colors[i * 3 + 1] = brightness;
        colors[i * 3 + 2] = brightness;
      }

      const dotsGeo = new THREE.BufferGeometry();
      dotsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      dotsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const dotsMat = new THREE.PointsMaterial({
        size: 0.038,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });
      const dotsMesh = new THREE.Points(dotsGeo, dotsMat);
      globeGroup.add(dotsMesh);

      // 5. Subtle Wireframe Latitude & Longitude Coordinate Rings (Monochrome Silver)
      const ringMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.12,
      });

      // Equator Ring
      const equatorGeo = new THREE.RingGeometry(radius * 1.01, radius * 1.013, 64);
      const equatorMesh = new THREE.LineLoop(equatorGeo, ringMat);
      equatorMesh.rotation.x = Math.PI / 2;
      globeGroup.add(equatorMesh);

      // Tilted Orbital Outer Ring
      const orbitGeo = new THREE.RingGeometry(radius * 1.22, radius * 1.223, 64);
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.18,
      });
      const orbitMesh = new THREE.LineLoop(orbitGeo, orbitMat);
      orbitMesh.rotation.x = Math.PI / 3;
      orbitMesh.rotation.y = Math.PI / 6;
      globeGroup.add(orbitMesh);

      // 6. Highlighted Server / Node Beacons (Glowing Active Nodes)
      const nodeCount = 5;
      const nodePositions = [
        { lat: -6.2, lon: 106.8 }, // Jakarta
        { lat: 1.35, lon: 103.8 }, // Singapore
        { lat: 35.6, lon: 139.6 }, // Tokyo
        { lat: 50.1, lon: 8.6 },   // Frankfurt
        { lat: 38.9, lon: -77.0 }, // US East
      ];

      const beaconGroup = new THREE.Group();
      globeGroup.add(beaconGroup);

      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.95,
      });

      nodePositions.forEach((pos) => {
        const phi = (90 - pos.lat) * (Math.PI / 180);
        const theta = (pos.lon + 180) * (Math.PI / 180);

        const bx = -(radius * 1.015) * Math.sin(phi) * Math.cos(theta);
        const by = (radius * 1.015) * Math.cos(phi);
        const bz = (radius * 1.015) * Math.sin(phi) * Math.sin(theta);

        const beaconGeo = new THREE.SphereGeometry(0.045, 12, 12);
        const bMesh = new THREE.Mesh(beaconGeo, beaconMat);
        bMesh.position.set(bx, by, bz);
        beaconGroup.add(bMesh);

        // Subtle outer pulse ring for nodes
        const ringGeo = new THREE.RingGeometry(0.06, 0.075, 16);
        const pRing = new THREE.Mesh(
          ringGeo,
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
        );
        pRing.position.set(bx, by, bz);
        pRing.lookAt(0, 0, 0);
        beaconGroup.add(pRing);
      });

      // 7. Ambient Stardust Particles
      const starCount = isMobile ? 30 : 70;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i += 3) {
        starPos[i] = (Math.random() - 0.5) * 8;
        starPos[i + 1] = (Math.random() - 0.5) * 8;
        starPos[i + 2] = (Math.random() - 0.5) * 5;
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.03,
        transparent: true,
        opacity: 0.4,
      });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      // 8. Mouse & Spring Interaction
      let targetX = 0;
      let targetY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 0.4;
        targetY = y * 0.35;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Resize
      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Default Globe Orientation
      globeGroup.rotation.x = 0.25;
      globeGroup.rotation.y = 1.2;

      // 9. Animation Loop
      const animate = () => {
        if (isDisposed) return;
        animId = requestAnimationFrame(animate);

        // Smooth spring interpolation
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Constant gentle auto-rotation on Y
        globeGroup.rotation.y += 0.0035;

        // Apply interactive mouse tilt
        globeGroup.rotation.x = 0.25 + mouseY * 0.4;
        globeGroup.rotation.z = -mouseX * 0.2;

        orbitMesh.rotation.z += 0.002;
        stars.rotation.y -= 0.0005;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);

        coreGeo.dispose();
        coreMat.dispose();
        dotsGeo.dispose();
        dotsMat.dispose();
        equatorGeo.dispose();
        orbitGeo.dispose();
        ringMat.dispose();
        orbitMat.dispose();
        beaconMat.dispose();
        starGeo.dispose();
        starMat.dispose();
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
      cancelAnimationFrame(animId);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[340px] sm:max-w-[420px] mx-auto pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}
