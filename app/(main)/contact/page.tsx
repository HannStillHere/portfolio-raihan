"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6">Mari ngobrol.</h1>
          <p className="text-neutral-400 mb-12">
            DM aja kalau mau tanya atau kolaborasi.
          </p>

          <Link
            href="https://instagram.com/_raihan.ajaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-2xl hover:text-amber-500 transition-colors group"
          >
            <Instagram className="w-6 h-6" />
            <span className="relative">
              @_raihan.ajaa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
