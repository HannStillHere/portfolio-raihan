import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { MaskedText } from "@/components/motion/MaskedText";
import { Card3DTilt } from "@/components/motion/Card3DTilt";
import { ArrowLeft, ArrowRight, ExternalLink, MessageCircle, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Tidak Ditemukan" };

  return {
    title: `${project.title} — Detail Project Raihan`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) notFound();

  const project = PROJECTS[currentIndex];
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Katalog Projects</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-2.5 py-1 text-xs font-mono font-medium rounded border border-white/[0.08] bg-white/[0.03] text-neutral-400">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
            {project.access === "owner" ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-semibold uppercase tracking-wider border border-red-500/30 bg-red-500/10 text-red-400">
                <Lock className="w-3.5 h-3.5" />
                Khusus Owner
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Akses Publik
              </span>
            )}
          </div>

          <MaskedText>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
              {project.title}
            </h1>
          </MaskedText>

          <MaskedText delay={0.08}>
            <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </MaskedText>
        </div>

        {/* Media Banner Showcase with 3D Tilt */}
        <div className="mb-16">
          <Card3DTilt>
            <div className="card-bezel rounded-2xl overflow-hidden p-2 sm:p-3 shadow-2xl">
              <ParallaxImage
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl"
                fit="contain"
              />
            </div>
          </Card3DTilt>
        </div>

        {/* CTA Bar */}
        <div className="mb-14 p-6 card-bezel rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-white">Status Operasional</h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {project.access === "owner"
                ? "Layanan keamanan internal privat terenkripsi di lingkungan lokal & VPS."
                : "Sistem aktif beroperasi 24/7 dan siap diakses pengguna."}
            </p>
          </div>

          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                project.id === "wa-ai-bot"
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40"
                  : "bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-950/40"
              }`}
            >
              {project.id === "wa-ai-bot" ? (
                <MessageCircle className="w-4 h-4" />
              ) : (
                <ExternalLink className="w-4 h-4" />
              )}
              <span>{project.linkLabel || "Buka Website"}</span>
            </Link>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-500 text-xs font-mono cursor-not-allowed"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Internal Service Privée</span>
            </button>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="card-bezel p-6 sm:p-8 rounded-xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-500 mb-3">
              Latar Belakang & Tantangan
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="card-bezel p-6 sm:p-8 rounded-xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              Pendekatan & Solusi
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-14 card-bezel p-6 sm:p-8 rounded-xl">
          <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <span>Fitur & Fungsionalitas Sistem</span>
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
            Teknologi yang Digunakan
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-10 border-t border-white/[0.08] flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start gap-1 text-left"
            >
              <span className="text-xs font-mono text-neutral-500 flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
                Sebelumnya
              </span>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="text-xs font-mono text-neutral-500 flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                Selanjutnya
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
