"use client";

import { Mail, MessageCircle } from "lucide-react";
import { contacts, copy } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

const channels = [
  {
    key: "github",
    icon: GitHubIcon,
    label: contacts.github.label,
    description: contacts.github.description,
    href: contacts.github.url,
    external: true,
  },
  {
    key: "linkedin",
    icon: LinkedInIcon,
    label: contacts.linkedin.label,
    description: contacts.linkedin.description,
    href: contacts.linkedin.url,
    external: true,
  },
  {
    key: "email",
    icon: Mail,
    label: "E-mail",
    description: "Enviar uma mensagem",
    href: contacts.mailto,
    external: false,
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    label: contacts.whatsapp.label,
    description: contacts.whatsapp.description,
    href: contacts.whatsapp.url,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title={copy.contact.title} lead={copy.contact.lead} />
          <h2 id="contact-title" className="sr-only">
            {copy.contact.title}
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.key} delay={0.04 * i}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <strong className="text-ink">{channel.label}</strong>
                  <span className="mt-1 text-sm text-muted">{channel.description}</span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-lg font-medium text-ink md:text-xl">
            {copy.contact.cta}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-line bg-panel/50 p-6 text-sm text-muted">
              <p>
                Preferência rápida:{" "}
                <a
                  className="text-accent hover:underline"
                  href={contacts.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contacts.whatsapp.display}
                </a>
              </p>
              <p className="mt-3">
                E-mail:{" "}
                <a className="text-accent hover:underline" href={contacts.mailto}>
                  {contacts.email}
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
