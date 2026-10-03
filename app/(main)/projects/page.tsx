"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: "sobatdonghua",
    title: "SobatDonghua",
    desc: "Platform streaming anime dan serial donghua subtitle Indonesia dengan sistem multi-server video player HD",
    link: "https://sobatdonghua.web.id",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/images/projects/screenshot-1.png",
  },
  {
    id: "downloaderku",
    title: "Downloaderku",
    desc: "Web media downloader serbaguna untuk unduh video TikTok FHD+ tanpa watermark, YouTube 4K, dan audio Spotify 320kbps",
    link: "https://downloaderku.web.id",
    tags: ["Next.js", "Fastify", "FFmpeg"],
    image: "/images/projects/screenshot-2.png",
  },
  {
    id: "raihancloud",
    title: "RaihanCloud v2",
    desc: "Unified web operations suite untuk memantau telemetri VPS cloud dan supervisi bot armada 24/7",
    link: "https://raihancloud.my.id",
    tags: ["Next.js", "Fastify", "SQLite"],
    image: "/images/projects/screenshot-3.png",
  },
  {
    id: "wa-ai-bot",
    title: "WhatsApp AI Assistant Bot",
    desc: "Bot WhatsApp berbasis Baileys multi-device dengan auto-reply AI cerdas dan generator stiker",
    link: null,
    tags: ["Node.js", "Baileys", "AI"],
    image: "/images/projects/screenshot-1.png",
  },
  {
    id: "telegram-sentinel",
    title: "Telegram Laptop Sentinel",
    desc: "Sistem keamanan laptop & kontrol jarak jauh dengan jepretan kamera otomatis saat salah password Windows",
    link: null,
    tags: ["Python", "Telegram API", "OpenCV"],
    image: "/images/projects/screenshot-2.png",
  },
  {
    id: "discord-bot",
    title: "Discord Server Master",
    desc: "Bot Discord komunitas dengan pemutar musik multi-platform, AI chat multi-model, dan sistem audit log",
    link: null,
    tags: ["Python", "discord.py", "yt-dlp"],
    image: "/images/projects/screenshot-3.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <MaskedText className="mb-6">
          <h1 className="text-6xl font-bold">Projects</h1>
        </MaskedText>
        
        <MaskedText delay={0.1} className="mb-20">
          <p className="text-neutral-400 text-lg">
            Koleksi aplikasi web dan sistem bot otomatisasi yang telah saya kembangkan.
          </p>
        </MaskedText>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <MaskedText key={project.id} delay={0.15 + i * 0.08}>
              <div className="card-bezel rounded-xl overflow-hidden group">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <ParallaxImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-video md:aspect-square"
                  />
                  
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-neutral-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl font-semibold group-hover:text-amber-500 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <p className="text-neutral-400 mb-4 leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-neutral-500 px-2.5 py-1 border border-white/[0.06] rounded"
                          >
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
                        className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mt-4 text-sm"
                      >
                        Kunjungi Website
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </MaskedText>
          ))}
        </div>
      </div>
    </div>
  );
}
