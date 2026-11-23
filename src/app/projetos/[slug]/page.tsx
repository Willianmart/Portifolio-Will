import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { Button } from "@/components/ui/Button";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { profile } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.summary,
      url: `${profile.siteUrl}/projetos/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main id="conteudo" className="pt-24 pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/#projetos"
            className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar aos projetos
          </Link>

          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {project.number} · {project.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-accent">{project.statusLabel}</p>
          {project.company ? (
            <p className="mt-2 text-sm text-muted">Empresa: {project.company}</p>
          ) : null}

          <div className="mt-8">
            <ProjectVisual project={project} />
          </div>

          <div className="prose-wm mt-10 space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>{project.description}</p>
            {project.participation ? <p>{project.participation}</p> : null}
          </div>

          {project.features?.length ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink">
                Funcionalidades desenvolvidas ou previstas
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-xl border border-line bg-surface/50 px-3 py-2 text-sm text-muted"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.differentials?.length ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink">Diferenciais</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.differentials.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-muted"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.slug === "vila" ? (
            <section className="mt-10 rounded-2xl border border-line bg-panel/60 p-5 text-sm text-muted">
              <h2 className="text-base font-semibold text-ink">Contexto</h2>
              <p className="mt-2">
                Cenário real de gestão pública municipal; referência Videira/SC,
                cerca de 59 mil habitantes e 16 unidades de saúde no cenário
                analisado. Backend desenvolvido, segurança reforçada e dashboard
                com dados usados no contexto do projeto.
              </p>
            </section>
          ) : null}

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">Tecnologias e conceitos</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {project.links?.length ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.map((link) =>
                link.external ? (
                  <Button key={link.href} href={link.href} external>
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                ) : (
                  <Button key={link.href} href={link.href} variant="soft">
                    {link.label}
                  </Button>
                ),
              )}
            </div>
          ) : null}

          <nav className="mt-16 border-t border-line pt-8" aria-label="Outros projetos">
            <p className="mb-4 text-sm text-muted">Outros projetos</p>
            <ul className="flex flex-wrap gap-3">
              {projects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={p.detailPath}
                      className="rounded-full border border-line px-3 py-2 text-sm text-ink hover:border-accent/40"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
