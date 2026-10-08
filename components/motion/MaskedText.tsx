"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MaskedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MaskedText({ children, className = "", delay = 0 }: MaskedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "20px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
