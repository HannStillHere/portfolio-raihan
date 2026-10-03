"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";
import { Cpu, Layout, Server, Database, Bot, Wrench } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Layout className="w-4 h-4 text-cyan-400" />,
  Backend: <Server className="w-4 h-4 text-emerald-400" />,
  Database: <Database className="w-4 h-4 text-sky-400" />,
  Automation: <Bot className="w-4 h-4 text-purple-400" />,
  "Tools & Deployment": <Wrench className="w-4 h-4 text-amber-400" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Tech Stack
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Teknologi & Keahlian
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mb-12">
          Tools, framework, dan runtime yang sering saya gunakan dalam
          pengembangan website serta otomatisasi bot.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`glass-card rounded-2xl p-6 double-bezel ${
                idx === SKILL_CATEGORIES.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  {CATEGORY_ICONS[category.category] || (
                    <Cpu className="w-4 h-4 text-cyan-400" />
                  )}
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {category.category}
                </h3>
              </div>

              {/* Badges List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
