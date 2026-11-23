"use client";

import { copy } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section
      id="formacao"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="education-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title={copy.education.title} />
          <h2 id="education-title" className="sr-only">
            {copy.education.title}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap gap-2">
            {copy.education.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base text-muted">
            {copy.education.interests}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
