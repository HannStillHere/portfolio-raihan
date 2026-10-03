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

      const width = container.clientWidth || 320;
      const height = container.clientHeight || 320;

      // Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 5;

      // WebGL Renderer
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Inner Core - Wireframe Icosahedron
      const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      scene.add(coreMesh);

      // Outer Shell - Wireframe Dodecahedron
      const outerGeo = new THREE.DodecahedronGeometry(1.65, 0);
      const outerMat = new THREE.MeshBasicMaterial({
        color: 0x404048,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const outerMesh = new THREE.Mesh(outerGeo, outerMat);
      scene.add(outerMesh);

      // Glowing Center Light Sphere
      const centerGeo = new THREE.SphereGeometry(0.35, 16, 16);
      const centerMat = new THREE.MeshBasicMaterial({
        color: 0xfbbf24,
        transparent: true,
        opacity: 0.6,
      });
      const centerMesh = new THREE.Mesh(centerGeo, centerMat);
      scene.add(centerMesh);

      // Space Dust Particles
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 40 : 100;
      const particlesGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 8;
      }
      particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const particlesMat = new THREE.PointsMaterial({
        color: 0xf59e0b,
        size: 0.045,
        transparent: true,
        opacity: 0.65,
      });
      const particles = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particles);

      // Mouse Tracking
      let targetX = 0;
      let targetY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 0.45;
        targetY = y * 0.45;
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

      // Animate Loop
      const animate = () => {
        if (isDisposed) return;
        animId = requestAnimationFrame(animate);

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        coreMesh.rotation.x += 0.005;
        coreMesh.rotation.y += 0.008;

        outerMesh.rotation.x -= 0.004;
        outerMesh.rotation.y -= 0.005;

        particles.rotation.y += 0.001;

        coreMesh.rotation.x += mouseY * 0.02;
        coreMesh.rotation.y += mouseX * 0.02;
        outerMesh.rotation.x += mouseY * 0.015;
        outerMesh.rotation.y += mouseX * 0.015;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);

        coreGeo.dispose();
        coreMat.dispose();
        outerGeo.dispose();
        outerMat.dispose();
        centerGeo.dispose();
        centerMat.dispose();
        particlesGeo.dispose();
        particlesMat.dispose();
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
      className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] mx-auto pointer-events-none"
      aria-hidden="true"
    />
  );
}
