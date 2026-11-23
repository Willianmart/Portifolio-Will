"use client";

import { ArrowUp } from "lucide-react";
import { contacts, copy, navItems, profile } from "@/data/profile";
import { BrandMark } from "@/components/ui/BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg">
            <BrandMark />
          </p>
          <p className="mt-1 text-sm text-muted">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{copy.footer.tagline}</p>
          <p className="mt-4 text-xs text-muted">© {year}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={contacts.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            LinkedIn
          </a>
          <a href={contacts.mailto} className="text-muted hover:text-ink">
            E-mail
          </a>
          <a
            href={contacts.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            WhatsApp
          </a>
          <a
            href="#inicio"
            className="mt-2 inline-flex min-h-11 items-center gap-2 text-accent hover:underline"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
            {copy.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
