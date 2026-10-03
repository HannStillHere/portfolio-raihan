"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  fit?: "contain" | "cover";
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  fit = "contain",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#050507] ${className}`}>
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className={fit === "contain" ? "object-contain p-2" : "object-cover"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
