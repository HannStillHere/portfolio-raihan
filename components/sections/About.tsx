"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { User, Terminal, Code2, Bot } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <User className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Tentang Saya
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
          Mengenal Lebih Dekat
        </h2>

        {/* About Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 double-bezel relative overflow-hidden"
        >
          {/* Subtle Ambient Light Corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

          {/* Verbatim Opening Paragraph */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 mb-6">
            <p className="text-base sm:text-lg text-cyan-200 font-medium leading-relaxed">
              &ldquo;{PERSONAL_INFO.about.opening}&rdquo;
            </p>
          </div>

          {/* Personal Journey Narrative */}
          <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>{PERSONAL_INFO.about.story}</p>
            <p>{PERSONAL_INFO.about.focus}</p>
          </div>

          {/* Highlight Points (Without numeric stats) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-6 border-t border-white/[0.08]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Fullstack Web</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Membangun antarmuka interaktif Next.js & API performan.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Bot Automation</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Automasi Baileys WhatsApp, Telegram, dan Discord bot.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">SMK TJKT</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Fondasi jaringan komputer, telekomunikasi & Linux server.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
