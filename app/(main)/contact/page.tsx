"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import { Card3DTilt } from "@/components/motion/Card3DTilt";
import Link from "next/link";
import { Instagram, Github, Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = PERSONAL_INFO.socials.email;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <MaskedText className="mb-4 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Mari ngobrol.
          </h1>
        </MaskedText>

        <MaskedText delay={0.08} className="mb-14 text-center">
          <p className="text-neutral-400 text-base sm:text-lg">
            DM aja kalau mau tanya atau kolaborasi.
          </p>
        </MaskedText>

        <div className="space-y-4">
          {/* Email Card with 1-click Copy */}
          <MaskedText delay={0.16}>
            <Card3DTilt>
              <div className="card-bezel p-6 rounded-2xl flex items-center justify-between gap-4 group">
                <a
                  href={PERSONAL_INFO.socials.emailMailto}
                  className="flex items-center gap-3.5 min-w-0"
                >
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-neutral-500 block">Email Langsung</span>
                    <span className="text-base sm:text-lg font-mono text-white truncate block group-hover:text-amber-400 transition-colors">
                      {email}
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl border border-white/10 hover:border-amber-500/40 bg-white/[0.03] text-neutral-400 hover:text-white transition-all shrink-0"
                  aria-label="Salin email ke clipboard"
                  title="Salin email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card3DTilt>
          </MaskedText>

          {/* Instagram Card */}
          <MaskedText delay={0.24}>
            <Card3DTilt>
              <Link
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="card-bezel p-6 rounded-2xl flex items-center justify-between gap-4 group block hover:border-amber-500/40 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-neutral-500 block">Instagram DM</span>
                    <span className="text-base sm:text-lg font-mono text-white truncate block group-hover:text-amber-400 transition-colors">
                      {PERSONAL_INFO.socials.instagramHandle}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Card3DTilt>
          </MaskedText>

          {/* GitHub Card */}
          <MaskedText delay={0.32}>
            <Card3DTilt>
              <Link
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-bezel p-6 rounded-2xl flex items-center justify-between gap-4 group block hover:border-amber-500/40 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2 rounded-xl bg-white/[0.05] text-white shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-neutral-500 block">GitHub Profile</span>
                    <span className="text-base sm:text-lg font-mono text-white truncate block group-hover:text-amber-400 transition-colors">
                      {PERSONAL_INFO.socials.githubUsername}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Card3DTilt>
          </MaskedText>
        </div>
      </div>
    </div>
  );
}
