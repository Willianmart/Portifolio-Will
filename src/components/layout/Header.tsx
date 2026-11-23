"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Header() {
  const active = useActiveSection();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || open
          ? "border-line bg-canvas/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/#inicio"
          className="font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition",
                active === item.id
                  ? "bg-surface text-ink"
                  : "text-muted hover:text-ink",
              )}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-ink md:ml-2"
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
            <Sun className="h-4 w-4" aria-hidden />
          ) : (
            <Moon className="h-4 w-4" aria-hidden />
          )}
        </button>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-canvas md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="min-h-11 border-b border-line py-3 text-base text-ink last:border-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
