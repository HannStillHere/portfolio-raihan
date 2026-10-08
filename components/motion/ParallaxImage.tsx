"use client";

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
  return (
    <div className={`relative overflow-hidden bg-[#050507] ${className}`}>
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className={`${
            fit === "contain" ? "object-contain p-2" : "object-cover"
          } transition-transform duration-500 ease-out group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
    </div>
  );
}
