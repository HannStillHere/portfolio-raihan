"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ExternalLink, Layers, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden double-bezel flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
        featured ? "h-full" : "h-full"
      }`}
    >
      <div>
        {/* Project Thumbnail with 16:9 Aspect Ratio & Zero CLS */}
        <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden border-b border-white/[0.08]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            priority={featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />

          {/* Status Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{project.status}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/[0.06] text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer / Action Link */}
      <div className="p-5 sm:p-6 pt-0 border-t border-white/[0.04] mt-auto">
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-300 text-sm font-semibold transition-all duration-200"
          >
            <span>Buka Website</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-neutral-500 text-xs font-medium cursor-not-allowed"
          >
            <span>Internal Service / Bot System</span>
          </button>
        )}
      </div>
    </div>
  );
}
