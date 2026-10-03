export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070709] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Raihan</p>
          <p className="font-mono">Next.js 14 • Tailwind CSS • Vercel</p>
        </div>
      </div>
    </footer>
  );
}
