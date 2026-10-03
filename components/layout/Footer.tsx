import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";
import { Github, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-12 text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span>Raihan</span>
          </div>
          <p className="text-xs text-neutral-500">
            Siswa SMK TJKT • Web Development & Automation
          </p>
        </div>

        {/* Center: Tech stack credit */}
        <div className="text-xs text-neutral-500 text-center">
          Built with{" "}
          <span className="text-neutral-300 font-medium">Next.js 14</span> &{" "}
          <span className="text-neutral-300 font-medium">Tailwind CSS</span>.
          Hosted on Vercel.
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-4">
          <Link
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Raihan"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/30 text-neutral-400 hover:text-white transition-all"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Raihan"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/30 text-neutral-400 hover:text-white transition-all"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <Link
            href="#home"
            aria-label="Kembali ke atas"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/30 text-neutral-400 hover:text-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-white/[0.04] text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Raihan. All rights reserved.
      </div>
    </footer>
  );
}
