"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { copy, profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

function WordReveal({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span>{text}</span>;
  }

  return (
    <span className="inline-flex flex-wrap gap-x-[0.3em]">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--mx", `${x * 18}px`);
    ref.current.style.setProperty("--my", `${y * 12}px`);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
      aria-label="Apresentação"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-tech [background-size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-20 top-24 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl",
          !reduced && "animate-float",
        )}
        style={{ transform: "translate(var(--mx, 0), var(--my, 0))" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 left-0 -z-10 h-64 w-64 rounded-full bg-electric/20 blur-3xl"
        style={{ transform: "translate(calc(var(--mx, 0) * -1), calc(var(--my, 0) * -1))" }}
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent sm:text-sm">
            {profile.tagline}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            <WordReveal text={copy.hero.title} />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {copy.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projetos">{copy.hero.ctaProjects}</Button>
            <Button href="#contato" variant="ghost">
              {copy.hero.ctaContact}
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-4 shadow-card">
            <Image
              src={withBasePath(profile.avatarSrc)}
              alt="Avatar tecnológico de Willian Martinez"
              width={512}
              height={512}
              priority
              className="h-auto w-full rounded-[1.4rem]"
            />
            <p className="mt-4 px-2 pb-2 text-sm text-muted">
              {profile.philosophy}
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
        aria-label="Rolar para sobre"
      >
        <span
          className={cn(
            "block h-8 w-5 rounded-full border border-line",
            !reduced && "after:absolute after:left-1/2 after:top-1.5 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-muted after:content-['']",
          )}
        />
        Scroll
      </a>
    </section>
  );
}
