export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "Aktif";
  link: string | null;
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
    email: "mailto:raihanabdul803@gmail.com",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Fastify / Express" },
      { name: "REST API" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "SQLite WAL" },
    ],
  },
  {
    category: "Automation",
    skills: [
      { name: "Baileys (WA Bot)" },
      { name: "Discord.py / Discord.js" },
      { name: "Telegram Bot API" },
      { name: "Cron & Scheduled Tasks" },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "Postman" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "sobatdonghua",
    title: "SobatDonghua",
    description: "Platform streaming anime dan serial donghua subtitle Indonesia dengan sistem multi-server video player HD yang cepat dan responsif.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cheerio"],
    status: "Aktif",
    link: "https://sobatdonghua.web.id",
    image: "/images/projects/screenshot-1.png",
    featured: true,
  },
  {
    id: "downloaderku",
    title: "Downloaderku",
    description: "Web media downloader serbaguna untuk unduh video TikTok FHD+ tanpa watermark, YouTube 4K, dan audio Spotify 320kbps.",
    tags: ["Next.js", "Fastify", "Node.js", "Tailwind CSS", "FFmpeg"],
    status: "Aktif",
    link: "https://downloaderku.web.id",
    image: "/images/projects/screenshot-2.png",
    featured: true,
  },
  {
    id: "raihancloud",
    title: "RaihanCloud v2",
    description: "Unified web operations suite untuk memantau telemetri VPS cloud, manajemen terminal interaktif, dan supervisi bot armada 24/7.",
    tags: ["Next.js", "Fastify", "TypeScript", "Prisma", "SQLite WAL"],
    status: "Aktif",
    link: "https://raihancloud.my.id",
    image: "/images/projects/screenshot-3.png",
    featured: true,
  },
  {
    id: "wa-ai-bot",
    title: "WhatsApp AI Assistant Bot",
    description: "Bot WhatsApp berbasis Baileys multi-device dengan auto-reply AI cerdas, generator stiker (.s, .brat, .smeme), dan auto-handler grup 24 jam.",
    tags: ["Node.js", "Baileys", "Sharp", "Pillow", "AI Fallback"],
    status: "Aktif",
    link: null,
    image: "/images/projects/screenshot-1.png",
    featured: false,
  },
  {
    id: "telegram-sentinel",
    title: "Telegram Laptop Sentinel",
    description: "Sistem keamanan laptop & kontrol jarak jauh dengan jepretan kamera otomatis saat salah password Windows (Event 4625) dan watchdog daya.",
    tags: ["Python", "Telegram API", "OpenCV", "Win32 API", "mss"],
    status: "Aktif",
    link: null,
    image: "/images/projects/screenshot-2.png",
    featured: false,
  },
  {
    id: "discord-bot",
    title: "Discord Server Master & Music",
    description: "Bot Discord komunitas dengan pemutar musik multi-platform (Spotify, YouTube, SoundCloud), AI chat multi-model, tiket, dan sistem audit log.",
    tags: ["Python", "discord.py", "yt-dlp", "SQLite", "httpx"],
    status: "Aktif",
    link: null,
    image: "/images/projects/screenshot-3.png",
    featured: false,
  },
];
