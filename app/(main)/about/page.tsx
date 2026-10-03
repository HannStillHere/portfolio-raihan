"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <MaskedText className="mb-12">
          <h1 className="text-6xl font-bold">Tentang Saya</h1>
        </MaskedText>
        
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <MaskedText delay={0.1}>
            <p className="text-xl">
              Saya adalah Raihan, background saya adalah siswa pelajar SMK jurusan TJKT, 
              saya sedang mengerjakan website streaming anime dan donghua.
            </p>
          </MaskedText>
          
          <MaskedText delay={0.2}>
            <p>
              Ketertarikan saya pada dunia pemrograman dan otomatisasi berawal saat sering menonton 
              tutorial Dea Afrizal di YouTube. Dari sana muncul rasa penasaran yang kuat untuk mulai 
              mengeksplorasi kode, merancang antarmuka web, hingga membangun berbagai bot automation 
              di WhatsApp, Discord, dan Telegram.
            </p>
          </MaskedText>
          
          <MaskedText delay={0.3}>
            <p>
              Saat ini saya aktif mendalami ekosistem Fullstack Web Development (Next.js & TypeScript) 
              serta bot automation berbasis event-driven.
            </p>
          </MaskedText>
        </div>

        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <MaskedText delay={0.4}>
            <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>
          </MaskedText>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { cat: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
              { cat: "Backend", skills: ["Node.js", "Python", "Fastify / Express", "REST API"] },
              { cat: "Database", skills: ["MySQL", "MongoDB", "Prisma ORM", "SQLite WAL"] },
              { cat: "Automation", skills: ["Baileys (WA Bot)", "Discord.py", "Telegram Bot API", "Cron"] },
            ].map((group, i) => (
              <MaskedText key={group.cat} delay={0.5 + i * 0.05}>
                <div>
                  <h3 className="text-sm font-mono text-amber-500 mb-4 tracking-wider">{group.cat}</h3>
                  <ul className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-neutral-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </MaskedText>
            ))}
          </div>
        </div>

        <MaskedText delay={0.7} className="mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-lg"
          >
            Mari ngobrol →
          </Link>
        </MaskedText>
      </div>
    </div>
  );
}
