"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/5" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle tema gelap/terang"
      className="relative p-2 rounded-lg border border-white/10 dark:border-white/10 border-neutral-300 bg-white/5 dark:bg-white/5 bg-neutral-100 hover:bg-white/10 dark:hover:bg-white/10 hover:border-cyan-400/40 text-neutral-300 hover:text-cyan-400 transition-all duration-200"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-800" />
      )}
    </button>
  );
}
