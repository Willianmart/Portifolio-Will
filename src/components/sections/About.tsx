"use client";

import Image from "next/image";
import { Brain, Building2, Code2, Network } from "lucide-react";
import { copy, profile } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { withBasePath } from "@/lib/site";

const icons = {
  dev: Code2,
  ai: Brain,
  infra: Network,
  entrepreneur: Building2,
} as const;

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="sobre-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title={copy.about.title} />
          <h2 id="sobre-title" className="sr-only">
            {copy.about.title}
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal delay={0.05}>
            <div className="glass overflow-hidden rounded-3xl p-3">
              <Image
                src={withBasePath(profile.avatarSrc)}
                alt="Identidade visual tecnológica de Willian Martinez"
                width={480}
                height={480}
                className="h-auto w-full rounded-2xl"
              />
              <p className="px-3 py-4 text-sm text-muted">{profile.location}</p>
            </div>
          </Reveal>

          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {copy.about.body.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.06 * i}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {copy.about.pillars.map((pillar, i) => {
            const Icon = icons[pillar.id as keyof typeof icons];
            return (
              <Reveal key={pillar.id} delay={0.05 * i}>
                <article className="group h-full rounded-2xl border border-line bg-surface/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
