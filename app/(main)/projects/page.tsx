"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import Link from "next/link";
import { ExternalLink, MessageCircle, Lock } from "lucide-react";

const PROJECTS = [
  {
    id: "sobatdonghua",
    title: "SobatDonghua",
    desc: "Platform streaming anime dan serial donghua subtitle Indonesia dengan sistem multi-server video player HD.",
    link: "https://sobatdonghua.web.id",
    linkLabel: "Kunjungi Website",
    access: "public" as const,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Cheerio"],
    image: "/images/projects/screenshot-1.png",
    features: null,
  },
  {
    id: "downloaderku",
    title: "Downloaderku",
    desc: "Web media downloader serbaguna untuk unduh video TikTok FHD+ tanpa watermark, YouTube 4K, dan audio Spotify 320kbps.",
    link: "https://downloaderku.web.id",
    linkLabel: "Kunjungi Website",
    access: "public" as const,
    tags: ["Next.js", "Fastify", "FFmpeg", "yt-dlp"],
    image: "/images/projects/screenshot-2.png",
    features: null,
  },
  {
    id: "raihancloud",
    title: "RaihanCloud v2",
    desc: "Unified web operations suite untuk memantau telemetri VPS cloud dan supervisi bot armada 24/7.",
    link: "https://raihancloud.my.id",
    linkLabel: "Kunjungi Website",
    access: "public" as const,
    tags: ["Next.js", "Fastify", "Prisma", "SQLite WAL"],
    image: "/images/projects/screenshot-3.png",
    features: null,
  },
  {
    id: "wa-ai-bot",
    title: "WhatsApp AI Assistant Bot",
    desc: "Bot WhatsApp berbasis Baileys multi-device dengan auto-reply AI cerdas, generator stiker, dan pencarian streaming anime.",
    link: "https://wa.me/6283821089552?text=HI",
    linkLabel: "Chat Bot di WhatsApp",
    access: "public" as const,
    tags: ["Node.js", "Baileys", "Sharp", "Pillow", "AI Cascade"],
    image: "/images/projects/whatsapp-bot.png",
    features: [
      "AI Chat Multi-Model 24/7 — Auto-reply chat pribadi & grup mention dengan engine DeepSeek V4.1 Flash, Gemini 3.8, Claude Opus, dan cascade failover otomatis.",
      "Stiker Instan (.s) — Konversi foto, video, GIF, dan dokumen menjadi stiker WebP ber-EXIF secara in-memory (<50ms).",
      "Stiker Brat (.brat / .bratvid) — Teks blur estetik dengan delimiter multi-baris dan Google Noto Color Emoji Android.",
      "Stiker Meme (.smeme) — Generator meme dengan teks Impact atas/bawah dan emoji resolusi tinggi.",
      "Konversi Stiker ke Gambar (.toimg) — Ubah stiker menjadi file gambar normal.",
      "Pencarian Streaming (.donghua) — Cari judul anime & donghua terintegrasi dengan database SobatDonghua.",
      "Cloud 24/7 — Berjalan di VPS Pterodactyl dengan anti-crash loop & reconnect backoff otomatis.",
    ],
  },
  {
    id: "telegram-sentinel",
    title: "Telegram Bot Assistant",
    desc: "Sistem keamanan laptop pribadi & kontrol jarak jauh penuh melalui Telegram.",
    link: null,
    linkLabel: null,
    access: "owner" as const,
    tags: ["Python", "Telegram API", "OpenCV", "Win32 API", "PyCaw"],
    image: "/images/projects/telegram-bot.png",
    features: [
      "AI Chat Multi-Model 24/7 — Auto-reply chat pribadi & grup mention dengan engine DeepSeek V4.1 Flash, Gemini 3.8, Claude Opus, dan cascade failover otomatis.",
      "Intruder Trap Webcam — Deteksi salah password Windows (Event 4625), kamera otomatis memotret wajah penyusup dan kirim ke Telegram.",
      "Power & Battery Watchdog — Pantau charger dicabut/pasang dan peringatan suara saat baterai <= 20%.",
      "Motion Detection (/guard on/off) — Sensor pendeteksi gerakan di depan laptop saat ditinggal.",
      "Remote Terminal Shell (/cmd) — Eksekusi perintah CMD/PowerShell Windows dari Telegram.",
      "Remote File Manager — Eksplorasi direktori (/ls), pencarian file (/findfile), dan unduh file (/getfile).",
      "Remote Control Laptop — Atur volume (PyCaw), media player, buka/tutup aplikasi (/open, /kill), kunci layar.",
      "Voice Intercom Edge-TTS — Putar suara manusia alami (Gadis, Ardi, Brian, Emma) melalui speaker laptop jarak jauh.",
      "Screenshot & Webcam Capture — Ambil tangkapan layar (/snap) dan foto webcam HD (/cam) dari mana saja.",
    ],
  },
  {
    id: "discord-bot",
    title: "Discord Bot Server",
    desc: "Bot Discord komunitas all-in-one untuk musik, AI chat, moderasi, dan manajemen server.",
    link: null,
    linkLabel: null,
    access: "owner" as const,
    tags: ["Python", "discord.py", "yt-dlp", "SQLite", "httpx"],
    image: "/images/projects/discord-bot.png",
    features: [
      "AI Chat Multi-Model 24/7 — Auto-reply chat pribadi & grup mention dengan engine DeepSeek V4.1 Flash, Gemini 3.8, Claude Opus, dan cascade failover otomatis.",
      "Music Player Multi-Platform — Streaming audio YouTube, Spotify, SoundCloud, TikTok dengan tombol kontrol interaktif.",
      "AI Chat Multi-Model & Vision — Chat cerdas di channel Discord dengan analisis gambar, dokumen, dan OCR.",
      "Moderasi Otomatis — Anti-spam, anti-raid, link filter, kick, ban, timeout, warn, purge pesan, lockdown channel.",
      "Audit Logging Real-Time — Catat otomatis edit/hapus pesan, keluar-masuk member, perubahan role ke channel privat.",
      "Ticket System — Sistem tiket bantuan interaktif dengan modal dan button.",
      "Auto-Role & Welcome Card — Role otomatis untuk member baru dan kartu selamat datang grafis.",
      "Pencarian Donghua (/donghua) — Slash command terintegrasi dengan database streaming SobatDonghua.",
    ],
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
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <ParallaxImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-video md:aspect-square bg-[#050507]"
                  />

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-neutral-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl font-semibold group-hover:text-amber-500 transition-colors">
                          {project.title}
                        </h2>
                        {project.access === "owner" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider border border-red-500/30 bg-red-500/10 text-red-400 rounded">
                            <Lock className="w-3 h-3" />
                            Khusus Owner
                          </span>
                        )}
                      </div>

                      <p className="text-neutral-400 mb-4 leading-relaxed">{project.desc}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-neutral-500 px-2.5 py-1 border border-white/[0.06] rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.features && (
                        <div className="mt-4 pt-4 border-t border-white/[0.06]">
                          <h4 className="text-xs font-mono text-amber-500/80 uppercase tracking-wider mb-3">
                            Fitur & Kemampuan
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, fi) => (
                              <li key={fi} className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed">
                                <span className="w-1 h-1 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      {project.link && project.linkLabel && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-sm transition-colors ${project.id === "wa-ai-bot"
                            ? "px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium"
                            : "text-amber-500 hover:text-amber-400"
                            }`}
                        >
                          {project.id === "wa-ai-bot" ? (
                            <MessageCircle className="w-4 h-4" />
                          ) : (
                            <ExternalLink className="w-4 h-4" />
                          )}
                          {project.linkLabel}
                        </Link>
                      )}
                    </div>
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
