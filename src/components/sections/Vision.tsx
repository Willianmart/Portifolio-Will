"use client";

import { copy } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";

export function Vision() {
  return (
    <section
      id="visao"
      className="scroll-mt-24 border-y border-line bg-panel/40 py-24 md:py-32"
      aria-labelledby="vision-title"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="vision-title"
            className="text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl"
          >
            {copy.vision.title}
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted md:text-xl">
          {copy.vision.body.map((p, i) => (
            <Reveal key={p.slice(0, 20)} delay={0.06 * i}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
