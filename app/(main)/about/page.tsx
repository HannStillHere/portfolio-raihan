"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import { Card3DTilt } from "@/components/motion/Card3DTilt";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Bot,
  Terminal,
  Cpu,
  Database,
  Server,
  Wrench,
  Cloud,
  Instagram,
  Github,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/lib/data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="w-4 h-4 text-amber-400" />,
  Backend: <Server className="w-4 h-4 text-emerald-400" />,
  "Database & Storage": <Database className="w-4 h-4 text-cyan-400" />,
  "Automation & Media Engine": <Bot className="w-4 h-4 text-amber-500" />,
  "Cloud, Systems & Tools": <Cloud className="w-4 h-4 text-neutral-300" />,
};

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-12">
          <MaskedText className="mb-3">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Tentang Saya
            </h1>
          </MaskedText>

          <MaskedText delay={0.08}>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Perjalanan belajar, eksplorasi kode, dan dedikasi membangun produk web serta otomasi bot.
            </p>
          </MaskedText>
        </div>

        {/* 2-Column Editorial Grid: Left Photo Card | Right Narrative */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-12 items-start mb-20">
          {/* Left Column: Portrait Card with 3D Tilt */}
          <div className="w-full max-w-[420px] mx-auto lg:max-w-none">
            <Card3DTilt>
              <div className="card-bezel rounded-2xl overflow-hidden p-2.5 sm:p-3 relative shadow-2xl">
                {/* Portrait Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#050507]">
                  <Image
                    src="/images/profile/raihan-portrait.png"
                    alt="Raihan Portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Quick Social Actions Below Photo */}
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-2">
                    <Link
                      href={PERSONAL_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-amber-500/40 text-neutral-400 hover:text-white transition-colors"
                      title="Instagram @_raihan.ajaa"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </Link>

                    <Link
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-amber-500/40 text-neutral-400 hover:text-white transition-colors"
                      title="GitHub HannStillHere"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-amber-500/40 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                    title="Salin email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Salin Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Narrative Story & Experience Bento */}
          <div className="space-y-6">
            <Card3DTilt>
              <div className="card-bezel rounded-2xl p-6 sm:p-8">
                {/* Verbatim SMK Opening Quote */}
                <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/25 mb-6">
                  <p className="text-base sm:text-lg text-amber-200 font-medium leading-relaxed">
                    &ldquo;{PERSONAL_INFO.about.opening}&rdquo;
                  </p>
                </div>

                {/* Personal Journey */}
                <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  <p>{PERSONAL_INFO.about.story}</p>
                  <p>{PERSONAL_INFO.about.focus}</p>
                </div>

                {/* Focus Pillars */}
                <div className="grid sm:grid-cols-3 gap-3.5 mt-8 pt-6 border-t border-white/[0.08]">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                      <Code2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Fullstack Web</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Next.js 15, TypeScript, Fastify API performan.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                      <Bot className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Bot Automation</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Baileys WhatsApp, Telegram, Discord 24/7.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                      <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>SMK TJKT</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Jaringan komputer, telekomunikasi & Linux.
                    </p>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-16">
          <MaskedText className="mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                Matrix Kemampuan
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">
                Keahlian & Teknologi
              </h2>
            </div>
          </MaskedText>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_CATEGORIES.map((category, idx) => (
              <MaskedText key={category.category} delay={0.1 + idx * 0.05}>
                <div className="card-bezel rounded-xl p-5 h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/[0.06]">
                    <div className="p-1.5 rounded-lg bg-white/[0.04]">
                      {CATEGORY_ICONS[category.category] || <Cpu className="w-4 h-4 text-amber-400" />}
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  <ul className="space-y-2 mt-auto">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="text-xs font-mono text-neutral-300 flex items-center gap-2 p-1.5 rounded hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MaskedText>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <p className="text-sm text-neutral-400">
            Punya ide atau ingin berkolaborasi?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-amber-500 hover:text-amber-400 transition-colors group"
          >
            <span>Mari terhubung</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
