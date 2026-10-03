"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { Instagram, MessageCircle, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">
            Hubungi Saya
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Mari Terhubung
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Tertarik kolaborasi atau tanya-tanya? DM aja.
        </p>

        {/* Big Dedicated Instagram Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-3xl p-8 sm:p-12 double-bezel relative overflow-hidden group hover:border-pink-500/40 transition-all duration-300"
        >
          {/* Subtle gradient accent on top */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500" />

          <div className="flex flex-col items-center">
            {/* Instagram Icon Badge with Glow */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[1.5px] mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-[#0A0A0B] rounded-2xl flex items-center justify-center">
                <Instagram className="w-8 h-8 text-pink-400" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Instagram Direct Message
            </h3>
            <p className="text-neutral-400 text-sm mb-8">
              {PERSONAL_INFO.socials.instagramHandle}
            </p>

            <Link
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-base shadow-lg shadow-pink-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>DM saya di Instagram</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
