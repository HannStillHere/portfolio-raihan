"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FolderGit2, Star, Sparkles } from "lucide-react";

export function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Portofolio
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Project Unggulan & Eksplorasi
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mb-12">
          Koleksi aplikasi web yang aktif beroperasi dan sistem bot otomatisasi
          yang telah saya kembangkan.
        </p>

        {/* Featured Projects (Top Row - 3 Col) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <h3 className="text-lg font-semibold text-white">
              Website & Layanan Publik
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} featured={true} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bot & Automation Projects (Bottom Row - 3 Col) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">
              Sistem Bot & Otomatisasi
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} featured={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
