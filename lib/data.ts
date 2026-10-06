export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Web App" | "Bot Automation";
  access: "public" | "owner";
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  status: "Aktif";
  link: string | null;
  linkLabel?: string;
  image: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export const PERSONAL_INFO = {
  name: "Raihan",
  role: "Siswa SMK TJKT & Self-taught Developer",
  tagline: "lagi belajar bikin website dan aplikasi serta bot otomatis",
  subTagline: "Fokus mendalami web development, integrasi API, dan bot otomatisasi yang mempermudah kebutuhan sehari-hari.",
  about: {
    opening: "Saya adalah Raihan, background saya adalah siswa pelajar SMK jurusan TJKT, saya sedang mengerjakan website streaming anime dan donghua.",
    story: "Ketertarikan saya pada dunia pemrograman dan otomatisasi berawal saat sering menonton tutorial Dea Afrizal di YouTube. Dari sana muncul rasa penasaran yang kuat untuk mulai mengeksplorasi kode, merancang antarmuka web, hingga membangun berbagai bot automation di WhatsApp, Discord, dan Telegram.",
    focus: "Saat ini saya aktif mendalami ekosistem Fullstack Web Development (Next.js & TypeScript) serta bot automation berbasis event-driven.",
  },
  socials: {
    instagram: "https://instagram.com/_raihan.ajaa",
    instagramHandle: "@_raihan.ajaa",
    github: "https://github.com/HannStillHere",
    githubUsername: "HannStillHere",
    email: "raihanabdul803@gmail.com",
    emailMailto: "mailto:raihanabdul803@gmail.com",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js (App Router)" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Three.js (WebGL)" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js (ESM & CJS)" },
      { name: "Fastify Gateway" },
      { name: "Express.js" },
      { name: "Python (asyncio)" },
      { name: "REST API & Webhooks" },
      { name: "WebSockets" },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite (WAL Mode)" },
      { name: "Drizzle ORM" },
      { name: "Prisma ORM" },
      { name: "MySQL" },
      { name: "Redis" },
    ],
  },
  {
    category: "Automation & Media Engine",
    skills: [
      { name: "Baileys (WhatsApp Bot)" },
      { name: "python-telegram-bot" },
      { name: "discord.py" },
      { name: "FFmpeg & Sharp" },
      { name: "yt-dlp Media Extractor" },
      { name: "OpenCV & Win32 API" },
    ],
  },
  {
    category: "Cloud, Systems & Tools",
    skills: [
      { name: "Linux Server (Ubuntu)" },
      { name: "Pterodactyl VPS" },
      { name: "Cloudflare Tunnel" },
      { name: "Git & GitHub" },
      { name: "Vercel" },
      { name: "VS Code" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "sobatdonghua",
    slug: "sobatdonghua",
    title: "SobatDonghua",
    subtitle: "Platform Streaming Anime & Donghua Multi-Server HD",
    category: "Web App",
    access: "public",
    description: "Platform streaming video anime Jepang dan animasi China (Donghua) subtitle Indonesia dengan sistem cascade multi-server video player HD yang cepat dan responsif.",
    problem: "Banyak situs streaming anime lokal lambat, dipenuhi iklan popup mengganggu, dan link streaming sering rusak/error ketika server pihak ketiga offline.",
    solution: "Membangun sistem multi-tier stream resolver otomatis dengan fallback cascade dari beberapa server mirror HD, cache LiteSpeed, dan player custom tanpa buffering.",
    features: [
      "Multi-Server Video Player HD — Pilihan server Blogger HD, Mega, Uqload, DesuStream, dan Vidhide.",
      "Katalog Terlengkap 2.180+ Judul — Dilengkapi navigasi season, filter tipe (Anime/Donghua), dan live search instan.",
      "Sistem Riwayat Menonton Cerdas — Melanjutkan tontonan otomatis dari detik dan episode terakhir.",
      "Fitur Komunitas Interaktif — Forum diskusi, rating bintang, review anime, dan notifikasi rilisan terbaru.",
    ],
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cheerio", "Drizzle ORM"],
    status: "Aktif",
    link: "https://sobatdonghua.web.id",
    linkLabel: "Kunjungi Website",
    image: "/images/projects/screenshot-1.png",
    featured: true,
  },
  {
    id: "downloaderku",
    slug: "downloaderku",
    title: "Downloaderku",
    subtitle: "Universal Media Downloader TikTok, YouTube & Spotify",
    category: "Web App",
    access: "public",
    description: "Web media downloader modern dan cepat untuk mengunduh video TikTok Full HD tanpa watermark, YouTube hingga resolusi 4K, dan audio jernih Spotify MP3 320kbps.",
    problem: "Pengguna kesulitan mengunduh video TikTok tanpa watermark kreator dalam resolusi asli 1080p, serta proses unduh musik yang sering terkena batasan kuota.",
    solution: "Merancang engine scraping sub-400ms multi-tier failover (Snaptik/Tiktokio/Ssstik) dan audio resolver Spotify MP3 320kbps langsung dengan proteksi SSRF ketat.",
    features: [
      "TikTok 1080P FHD+ Tanpa Watermark — Ekstraksi video jernih bersih tanpa watermark dalam hitungan milidetik.",
      "YouTube 4K & MP3 320kbps — Konversi audio dan video resolusi tinggi dengan anti-bot bypass.",
      "Spotify Multi-Tier Failover — Ekstraksi album, playlist 15+ lagu sekaligus, dan signed link MP3 direct.",
      "QR Code Phone Bridge — Unduh di laptop lalu scan QR untuk simpan langsung ke galeri smartphone.",
      "Sesi Akun Persisten 1 Tahun — Riwayat unduhan terisolasi aman per pengguna.",
    ],
    tags: ["Next.js 15", "Fastify", "Node.js", "Tailwind CSS", "FFmpeg", "yt-dlp"],
    status: "Aktif",
    link: "https://downloaderku.web.id",
    linkLabel: "Kunjungi Website",
    image: "/images/projects/screenshot-2.png",
    featured: true,
  },
  {
    id: "raihancloud",
    slug: "raihancloud",
    title: "RaihanCloud v2",
    subtitle: "Unified Cloud Ops & AI Multi-Model Operations Suite",
    category: "Web App",
    access: "public",
    description: "Pusat komando terpadu untuk memantau performa server VPS Pterodactyl 24/7, supervisi bot otomatisasi, interactive web terminal, dan gateway AI multi-model.",
    problem: "Mengelola 5 bot dan berbagai layanan cloud secara terpisah di terminal server menyulitkan pemantauan status kesehatan dan pemulihan saat restart.",
    solution: "Membangun dashboard sentral dengan Fastify Master Gateway, pemantauan telemetri real-time, terminal interaktif ttyd di browser, dan auto-healer bot.",
    features: [
      "Supervisi 5 Armada Bot 24/7 — Status live WhatsApp, Telegram, Discord, dan ShortDrama bots.",
      "Interactive Web Terminal (ttyd) — Kontrol CLI server langsung dari browser tanpa SSH manual.",
      "AI Gateway 267+ Model — Proxy cerdas dengan model cascade failover untuk melayani kebutuhan bot.",
      "Laptop Sentinel Cockpit — Snapshot layar, foto webcam HD, remote TTS speaker, dan shell CMD.",
    ],
    tags: ["Next.js 15", "Fastify", "TypeScript", "Prisma", "SQLite WAL", "Cloudflare Tunnel"],
    status: "Aktif",
    link: "https://raihancloud.my.id",
    linkLabel: "Kunjungi Website",
    image: "/images/projects/screenshot-3.png",
    featured: true,
  },
  {
    id: "wa-ai-bot",
    slug: "whatsapp-ai-bot",
    title: "WhatsApp AI Assistant Bot",
    subtitle: "Bot WhatsApp Baileys 24/7 Multi-Model AI & Sticker Engine",
    category: "Bot Automation",
    access: "public",
    description: "Bot asisten WhatsApp pintar berbasis Baileys multi-device dengan auto-reply AI multi-model cerdas, generator stiker otomatis, dan integrasi katalog streaming.",
    problem: "Kebutuhan asisten otomatis di WhatsApp yang mampu merespons pertanyaan cerdas secara instan dan mengolah stiker custom tanpa aplikasi pihak ketiga.",
    solution: "Mengintegrasikan socket Baileys dengan Fastify AI Proxy (DeepSeek V4.1 Flash, Gemini 3.8, Claude Opus) dan engine stiker in-memory berlatensi sangat cepat.",
    features: [
      "AI Chat Multi-Model 24/7 — Auto-reply chat pribadi & grup mention dengan cascade failover.",
      "Stiker Instan (.s) — Konversi foto, video, GIF, dokumen menjadi stiker WebP ber-EXIF (<50ms).",
      "Stiker Brat (.brat / .bratvid) — Efek teks blur khas Brat dengan delimiter baris '|' dan Google Noto Color Emoji.",
      "Stiker Meme (.smeme) — Stiker meme Impact font atas/bawah dengan emoji resolusi tinggi.",
      "Konversi Gambar (.toimg) — Mengembalikan stiker menjadi file gambar resolusi normal.",
      "Pencarian Anime (.donghua) — Menemukan link nonton langsung dari database SobatDonghua.",
      "Cloud Runner 24/7 — Aktif non-stop di VPS dengan proteksi koneksi anti-crash.",
    ],
    tags: ["Node.js", "Baileys", "Sharp", "Pillow", "AI Cascade", "Linux VPS"],
    status: "Aktif",
    link: "https://wa.me/6283821089552?text=HI",
    linkLabel: "Chat Bot di WhatsApp",
    image: "/images/projects/whatsapp-bot.png",
    featured: false,
  },
  {
    id: "telegram-sentinel",
    slug: "telegram-laptop-sentinel",
    title: "Telegram Laptop Sentinel",
    subtitle: "Keamanan Stealth Laptop & Remote Control Intercom",
    category: "Bot Automation",
    access: "owner",
    description: "Sistem keamanan laptop Windows 11 pribadi berbasis Telegram yang memantau percobaan penyusupan fisik dan menyediakan kontrol jarak jauh lengkap.",
    problem: "Kekhawatiran laptop diakses orang lain saat ditinggal dan kebutuhan mengakses file serta mengontrol laptop dari jarak jauh.",
    solution: "Menghubungkan Event Log Windows Security 4625 ke trigger OpenCV webcam rahasia, serta membangun bot controller jarak jauh via Python asyncio.",
    features: [
      "Intruder Trap Webcam (Event 4625) — Memotret wajah penyusup saat salah password Windows dan mengirim ke Telegram.",
      "Power & Battery Watchdog — Peringatan instan saat charger dicabut atau baterai melemah <= 20%.",
      "Motion Detection (/guard on/off) — Sensor gerak webcam mendeteksi pergerakan di depan laptop.",
      "Remote Terminal Shell (/cmd) — Eksekusi command line PowerShell/CMD dari mana saja.",
      "Remote File Manager — Telusuri folder (/ls), cari file (/findfile), dan unduh dokumen ke Telegram (/getfile).",
      "Kontrol Sistem & Audio — Atur volume audio (PyCaw), kontrol musik, matikan aplikasi, dan kunci layar.",
      "Voice Intercom Edge-TTS — Memutar ucapan suara manusia alami melalui speaker laptop dari jarak jauh.",
    ],
    tags: ["Python", "Telegram API", "OpenCV", "Win32 API", "PyCaw", "Edge-TTS"],
    status: "Aktif",
    link: null,
    image: "/images/projects/telegram-bot.png",
    featured: false,
  },
  {
    id: "discord-bot",
    slug: "discord-server-master",
    title: "Discord Server Master",
    subtitle: "Bot Manajemen Server, Musik Multi-Platform & AI Assistant",
    category: "Bot Automation",
    access: "owner",
    description: "Bot Discord komunitas serbaguna untuk kebutuhan pemutar musik berkualitas tinggi, moderasi otomatis, AI chat dengan vision/OCR, dan sistem tiket.",
    problem: "Mengelola server Discord membutuhkan banyak bot terpisah (music bot, mod bot, ticket bot) yang membebani server.",
    solution: "Menggabungkan seluruh fungsi dalam satu arsitektur modular python-discord.py dengan database lokal SQLite dan integrasi yt-dlp.",
    features: [
      "Music Player Multi-Platform — Pemutar audio YouTube, Spotify, SoundCloud, TikTok dengan tombol interaktif.",
      "Multi-Model AI Chat & Vision — Asisten AI di channel Discord dengan kemampuan analisis foto dan OCR.",
      "Sistem Moderasi Otomatis — Anti-spam, anti-raid, filter tautan berbahaya, kick, ban, timeout, dan lockdown.",
      "Audit Logging Real-Time — Pencatatan otomatis riwayat edit pesan, hapus pesan, dan aktivitas member.",
      "Sistem Tiket Interaktif — Tiket bantuan terpadu dengan modal pop-up dan tombol satu klik.",
      "Integrasi SobatDonghua — Perintah slash command /donghua langsung ke database streaming anime.",
    ],
    tags: ["Python", "discord.py", "yt-dlp", "SQLite", "httpx", "Slash Commands"],
    status: "Aktif",
    link: null,
    image: "/images/projects/discord-bot.png",
    featured: false,
  },
];
