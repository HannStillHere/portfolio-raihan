"use client";

import dynamic from "next/dynamic";
import { MaskedText } from "@/components/motion/MaskedText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Card3DTilt } from "@/components/motion/Card3DTilt";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/data";

// 3D Scene loaded dynamically (client-only, SSR false)
const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => <div className="w-[320px] h-[320px] mx-auto animate-pulse" /> }
);

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Core */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Editorial Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-amber-400 tracking-wide">
                  Siswa SMK TJKT • Web & Bot Automation
                </span>
              </div>

              <MaskedText className="mb-4">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white">
                  Raihan
                </h1>
              </MaskedText>

              <MaskedText delay={0.08} className="mb-6">
                <p className="text-xl sm:text-2xl text-neutral-300 font-medium leading-relaxed">
                  &ldquo;lagi belajar bikin website dan aplikasi serta bot otomatis&rdquo;
                </p>
              </MaskedText>

              <MaskedText delay={0.16} className="mb-8">
                <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
                  Fokus mengeksplorasi antarmuka web modern, integrasi API performan, dan sistem bot
                  otomatisasi berbasis event-driven di WhatsApp, Telegram, dan Discord.
                </p>
              </MaskedText>

              <MaskedText delay={0.24}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-950/40"
                  >
                    <span>Jelajahi Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-amber-500/40 text-sm font-medium rounded-xl transition-all hover:bg-white/[0.02]"
                  >
                    Tentang Saya
                  </Link>
                </div>
              </MaskedText>
            </div>

            {/* Right Column: Interactive 3D Geometric Core */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <HeroScene />
                <div className="absolute -bottom-2 inset-x-0 text-center">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    3D Spatial Core • Gerakkan Mouse
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="border-y border-white/[0.06] bg-[#060608] py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-8 text-xs font-mono uppercase tracking-widest text-neutral-500 animate-pulse-slow">
          <span>NEXT.JS 15</span>
          <span>•</span>
          <span>TYPESCRIPT</span>
          <span>•</span>
          <span>BOT AUTOMATION</span>
          <span>•</span>
          <span>FASTIFY GATEWAY</span>
          <span>•</span>
          <span>LINUX VPS PTERODACTYL</span>
          <span>•</span>
          <span>THREE.JS SPATIAL</span>
          <span>•</span>
          <span>POSTGRESQL & SQLITE WAL</span>
          <span>•</span>
          <span>BAILEYS & DISCORD.PY</span>
        </div>
      </div>

      {/* Featured Projects with 3D Tilt Cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <MaskedText className="mb-12">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                  Pilihan Utama
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                  Featured Projects
                </h2>
              </div>

              <Link
                href="/projects"
                className="text-sm font-mono text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1 group"
              >
                <span>Lihat semua</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </MaskedText>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((project, i) => (
              <MaskedText key={project.id} delay={0.1 + i * 0.1}>
                <Card3DTilt>
                  <div className="card-bezel rounded-2xl overflow-hidden group flex flex-col justify-between h-full">
                    <div>
                      <ParallaxImage
                        src={project.image}
                        alt={project.title}
                        className="aspect-video"
                        fit="contain"
                      />

                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs font-mono px-2 py-0.5 rounded border border-white/[0.08] text-neutral-400">
                            {project.category}
                          </span>
                        </div>

                        <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-white/[0.04] mt-auto flex items-center justify-between gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xs font-mono font-medium text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
                      >
                        <span>Lihat Studi Kasus</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                          <span>Buka Web</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card3DTilt>
              </MaskedText>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
