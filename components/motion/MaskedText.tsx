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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 32,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
