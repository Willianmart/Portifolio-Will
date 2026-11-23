"use client";

import { Briefcase, GraduationCap, Rocket } from "lucide-react";
import { copy } from "@/data/profile";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const kindIcon = {
  work: Briefcase,
  venture: Rocket,
  education: GraduationCap,
} as const;

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-y border-line bg-panel/30 py-20 md:py-28"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title={copy.experience.title} />
          <h2 id="experience-title" className="sr-only">
            {copy.experience.title}
          </h2>
        </Reveal>

        <ol className="relative space-y-8 border-l border-line pl-6 md:pl-8">
          {experience.map((item, i) => {
            const Icon = kindIcon[item.kind];
            return (
              <li key={item.id} className="relative">
                <Reveal delay={0.05 * i}>
                  <span className="absolute -left-[2.05rem] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-accent md:-left-[2.55rem]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <article className="rounded-2xl border border-line bg-surface/50 p-5 md:p-6">
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-accent">{item.org}</p>
                    <p className="mt-3 text-sm text-muted md:text-base">{item.summary}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-muted before:mr-2 before:text-accent before:content-['•']"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
