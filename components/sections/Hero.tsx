"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Instagram, Github, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Radial Neon Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-transparent blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] bg-amber-500/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md mb-6 shadow-sm shadow-cyan-950/50"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-cyan-300">
            Siswa SMK TJKT • Terbuka Belajar Hal Baru
          </span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Halo, saya{" "}
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-neutral-300 font-medium max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          &ldquo;{PERSONAL_INFO.tagline}&rdquo;
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-8 font-normal"
        >
          {PERSONAL_INFO.subTagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all duration-200 shadow-glow flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Lihat Project</span>
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white font-medium text-sm transition-all duration-200 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Hubungi Saya
          </Link>
        </motion.div>

        {/* Social Icons Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <Link
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/10 transition-all"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-white/10 transition-all"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href={PERSONAL_INFO.socials.email}
            aria-label="Email"
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-amber-300 hover:border-amber-400/40 hover:bg-white/10 transition-all"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce">
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
