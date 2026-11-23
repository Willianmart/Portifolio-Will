"use client";

import {
  Bot,
  Code2,
  GitBranch,
  Server,
  Wrench,
} from "lucide-react";
import { copy } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryIcon = {
  development: Code2,
  infrastructure: Server,
  ai: Bot,
  tools: Wrench,
} as const;

export function Skills() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-24 border-y border-line bg-panel/40 py-20 md:py-28"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title={copy.skills.title} />
          <h2 id="skills-title" className="sr-only">
            {copy.skills.title}
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcon[category.id as keyof typeof categoryIcon] ?? GitBranch;
            return (
              <Reveal key={category.id} delay={0.05 * i}>
                <article className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition duration-300 hover:border-accent/35 hover:shadow-card">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-canvas/50 px-3 py-1.5 text-sm text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
