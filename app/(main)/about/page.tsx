"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import { Card3DTilt } from "@/components/motion/Card3DTilt";
import Link from "next/link";
import { ArrowRight, Code2, Bot, Terminal, Cpu, Database, Server, Wrench } from "lucide-react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/lib/data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="w-4 h-4 text-amber-400" />,
  Backend: <Server className="w-4 h-4 text-emerald-400" />,
  Database: <Database className="w-4 h-4 text-cyan-400" />,
  Automation: <Bot className="w-4 h-4 text-amber-500" />,
  "Tools & Deployment": <Wrench className="w-4 h-4 text-neutral-400" />,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <MaskedText className="mb-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Tentang Saya
          </h1>
        </MaskedText>

        <MaskedText delay={0.08} className="mb-14">
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Perjalanan belajar, eksplorasi kode, dan dedikasi membangun produk web serta otomasi bot.
          </p>
        </MaskedText>

        {/* Narrative Bento Card with 3D Tilt */}
        <div className="mb-16">
          <Card3DTilt>
            <div className="card-bezel rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/25 mb-8">
                <p className="text-base sm:text-lg text-amber-200 font-medium leading-relaxed">
                  &ldquo;{PERSONAL_INFO.about.opening}&rdquo;
                </p>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
                <p>{PERSONAL_INFO.about.story}</p>
                <p>{PERSONAL_INFO.about.focus}</p>
              </div>

              {/* Focus Pillars */}
              <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>Fullstack Web</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Arsitektur modern Next.js 15, TypeScript, dan Fastify performan.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                    <Bot className="w-4 h-4 text-emerald-400" />
                    <span>Bot Automation</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Baileys WhatsApp, Telegram Sentinel, dan Discord server bot 24/7.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>SMK TJKT</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Fondasi jaringan komputer, telekomunikasi, dan administrasi Linux server.
                  </p>
                </div>
              </div>
            </div>
          </Card3DTilt>
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
