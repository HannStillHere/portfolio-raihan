"use client";

import { useState } from "react";
import { MaskedText } from "@/components/motion/MaskedText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Card3DTilt } from "@/components/motion/Card3DTilt";
import Link from "next/link";
import { ExternalLink, MessageCircle, Send, Lock, ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | "Web App" | "Bot Automation">("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <MaskedText className="mb-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Projects
          </h1>
        </MaskedText>

        <MaskedText delay={0.08} className="mb-10">
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Koleksi aplikasi web yang aktif beroperasi dan sistem bot otomatisasi yang telah saya
            rancang dan bangun secara mandiri.
          </p>
        </MaskedText>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {(["All", "Web App", "Bot Automation"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === tab
                  ? "bg-amber-500 text-black font-semibold shadow-md shadow-amber-950/40"
                  : "bg-white/[0.03] border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab === "All" ? "Semua Project" : tab}
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {filteredProjects.map((project, i) => (
            <MaskedText key={project.id} delay={0.1 + i * 0.05}>
              <Card3DTilt>
                <div className="card-bezel rounded-2xl overflow-hidden group">
                  <div className="grid md:grid-cols-[340px_1fr] gap-0">
                    {/* Media Thumbnail Container */}
                    <div className="relative bg-[#050507] border-b md:border-b-0 md:border-r border-white/[0.06] flex items-center justify-center p-3">
                      <ParallaxImage
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/10] md:aspect-square rounded-xl"
                        fit="contain"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Header Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-xs font-mono text-neutral-500">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors"
                            >
                              {project.title}
                            </Link>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 text-[11px] font-mono rounded border border-white/[0.08] text-neutral-400">
                              {project.category}
                            </span>
                            {project.access === "owner" ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider border border-red-500/30 bg-red-500/10 text-red-400 rounded">
                                <Lock className="w-3 h-3" />
                                Khusus Owner
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono text-neutral-400 px-2.5 py-1 border border-white/[0.06] bg-white/[0.02] rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Features preview */}
                        {project.features && (
                          <div className="mt-4 pt-4 border-t border-white/[0.06]">
                            <h4 className="text-xs font-mono text-amber-500/90 uppercase tracking-wider mb-2.5">
                              Fitur Unggulan
                            </h4>
                            <ul className="space-y-1.5">
                              {project.features.slice(0, 4).map((feature, fi) => (
                                <li
                                  key={fi}
                                  className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {project.features.length > 4 && (
                                <li className="text-xs text-neutral-500 pl-3.5">
                                  + {project.features.length - 4} fitur lainnya di halaman detail...
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-amber-500 hover:text-amber-400 transition-colors group-hover:translate-x-0.5"
                        >
                          <span>Pelajari Studi Kasus & Arsitektur</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                              project.id === "wa-ai-bot"
                                ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                                : project.id === "dramashort-bot"
                                ? "bg-sky-600 hover:bg-sky-500 text-white"
                                : "border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.03] text-neutral-300 hover:text-white"
                            }`}
                          >
                            {project.id === "wa-ai-bot" ? (
                              <MessageCircle className="w-4 h-4" />
                            ) : project.id === "dramashort-bot" ? (
                              <Send className="w-4 h-4" />
                            ) : (
                              <ExternalLink className="w-4 h-4" />
                            )}
                            <span>{project.linkLabel || "Buka Website"}</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </MaskedText>
          ))}
        </div>
      </div>
    </div>
  );
}
