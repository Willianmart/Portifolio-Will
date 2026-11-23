"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { copy } from "@/data/profile";
import { futureProjects, projects } from "@/data/projects";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <section
      id="projetos"
      className="scroll-mt-24 py-20 md:py-28"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title={copy.projects.title} />
          <h2 id="projects-title" className="sr-only">
            {copy.projects.title}
          </h2>
        </Reveal>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * i}>
              <article className="group overflow-hidden rounded-3xl border border-line bg-surface/50 transition duration-300 hover:border-accent/35 hover:shadow-card">
                <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
                  <div className="p-4 sm:p-5">
                    <ProjectVisual project={project} />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-8">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                      <span className="text-accent">{project.number}</span>
                      <span aria-hidden>·</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                      {project.summary}
                    </p>
                    <p className="mt-3 text-xs font-medium text-accent/90">
                      Status: {project.statusLabel}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button href={project.detailPath} variant="soft">
                        Ver detalhes
                      </Button>
                      {project.links
                        ?.filter((l) => l.external)
                        .slice(0, 1)
                        .map((link) => (
                          <Button
                            key={link.href}
                            href={link.href}
                            external
                            variant="ghost"
                          >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </Button>
                        ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-dashed border-line bg-panel/40 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">
              {copy.projects.futureTitle}
            </h3>
            {futureProjects.length === 0 ? (
              <p className="mt-3 max-w-2xl text-sm text-muted">
                {copy.projects.futureEmpty}
              </p>
            ) : (
              <ul className="mt-4 space-y-2">
                {futureProjects.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.detailPath} className="text-accent hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
