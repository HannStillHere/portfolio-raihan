"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: "sobatdonghua",
    title: "SobatDonghua",
    desc: "Platform streaming anime dan serial donghua subtitle Indonesia dengan sistem multi-server video player HD",
    link: "https://sobatdonghua.web.id",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "downloaderku",
    title: "Downloaderku",
    desc: "Web media downloader serbaguna untuk unduh video TikTok FHD+ tanpa watermark, YouTube 4K, dan audio Spotify 320kbps",
    link: "https://downloaderku.web.id",
    tags: ["Next.js", "Fastify", "FFmpeg"],
  },
  {
    id: "raihancloud",
    title: "RaihanCloud v2",
    desc: "Unified web operations suite untuk memantau telemetri VPS cloud dan supervisi bot armada 24/7",
    link: "https://raihancloud.my.id",
    tags: ["Next.js", "Fastify", "SQLite"],
  },
  {
    id: "wa-ai-bot",
    title: "WhatsApp AI Assistant Bot",
    desc: "Bot WhatsApp berbasis Baileys multi-device dengan auto-reply AI cerdas dan generator stiker",
    link: null,
    tags: ["Node.js", "Baileys", "AI"],
  },
  {
    id: "telegram-sentinel",
    title: "Telegram Laptop Sentinel",
    desc: "Sistem keamanan laptop & kontrol jarak jauh dengan jepretan kamera otomatis saat salah password Windows",
    link: null,
    tags: ["Python", "Telegram API", "OpenCV"],
  },
  {
    id: "discord-bot",
    title: "Discord Server Master",
    desc: "Bot Discord komunitas dengan pemutar musik multi-platform, AI chat multi-model, dan sistem audit log",
    link: null,
    tags: ["Python", "discord.py", "yt-dlp"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-neutral-400 mb-16">Koleksi aplikasi web dan sistem bot otomatisasi yang telah saya kembangkan.</p>

          <div className="space-y-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-bezel p-6 rounded-xl group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-neutral-600">0{i + 1}</span>
                      <h2 className="text-2xl font-semibold group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-neutral-400 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono text-neutral-500 px-2 py-1 border border-white/[0.06] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
