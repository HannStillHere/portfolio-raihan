"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode, MouseEvent, useState, useEffect } from "react";

interface Card3DTiltProps {
  children: ReactNode;
  className?: string;
}

export function Card3DTilt({ children, className = "" }: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isTouchOrSlow, setIsTouchOrSlow] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    const touch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    setIsTouchOrSlow(touch);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Crisp spring physics without sluggish oscillation
  const springConfig = { stiffness: 400, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseEnter = () => {
    if (isTouchOrSlow || !cardRef.current) return;
    // Cache bounding rect ONCE on enter to completely avoid layout thrashing on mousemove
    rectRef.current = cardRef.current.getBoundingClientRect();
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchOrSlow) return;
    const rect = rectRef.current;
    if (!rect || rect.width === 0 || rect.height === 0) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
  };

  if (isTouchOrSlow) {
    return <div className={`w-full h-full ${className}`}>{children}</div>;
  }

  return (
    <div style={{ perspective: 1000 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
