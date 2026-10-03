"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-8">Tentang Saya</h1>
          
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p className="text-lg">
              Saya adalah Raihan, background saya adalah siswa pelajar SMK jurusan TJKT, 
              saya sedang mengerjakan website streaming anime dan donghua.
            </p>
            
            <p>
              Ketertarikan saya pada dunia pemrograman dan otomatisasi berawal saat sering menonton 
              tutorial Dea Afrizal di YouTube. Dari sana muncul rasa penasaran yang kuat untuk mulai 
              mengeksplorasi kode, merancang antarmuka web, hingga membangun berbagai bot automation 
              di WhatsApp, Discord, dan Telegram.
            </p>
            
            <p>
              Saat ini saya aktif mendalami ekosistem Fullstack Web Development (Next.js & TypeScript) 
              serta bot automation berbasis event-driven.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { cat: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"] },
                { cat: "Backend", skills: ["Node.js", "Python", "Fastify/Express", "REST API"] },
                { cat: "Database", skills: ["MySQL", "MongoDB", "Prisma ORM", "SQLite"] },
                { cat: "Automation", skills: ["Baileys (WA Bot)", "Discord.py", "Telegram Bot API"] },
              ].map((group) => (
                <div key={group.cat}>
                  <h3 className="text-sm font-mono text-amber-500 mb-3">{group.cat}</h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-neutral-400">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              Mari ngobrol →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
