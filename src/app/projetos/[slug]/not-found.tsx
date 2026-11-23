import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold text-ink">Projeto não encontrado</h1>
      <p className="mt-3 text-muted">
        Este projeto não existe neste portfólio ou o link está incorreto.
      </p>
      <Link
        href="/#projetos"
        className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
      >
        Voltar aos projetos
      </Link>
    </main>
  );
}
