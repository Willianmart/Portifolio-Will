import type { Project } from "@/data/projects";

/** Illustrative project visuals — labeled where needed; no invented stats. */
export function ProjectVisual({ project }: { project: Project }) {
  const brand = project.brand ?? {
    primary: "#101218",
    secondary: "#151923",
    accent: "#7C5CFC",
  };

  if (project.visual === "vila") {
    return (
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line"
        style={{
          background: `linear-gradient(145deg, ${brand.primary}, ${brand.secondary})`,
        }}
      >
        <div className="absolute inset-4 grid grid-cols-3 gap-2 opacity-90">
          <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="mb-2 h-2 w-20 rounded bg-white/25" />
            <div className="flex h-16 items-end gap-1">
              {[40, 65, 35, 80, 55, 70, 45].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: brand.accent, opacity: 0.75 }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="mb-3 h-2 w-12 rounded bg-white/25" />
            <div className="space-y-2">
              <div className="h-8 rounded bg-white/10" />
              <div className="h-8 rounded bg-white/10" />
            </div>
          </div>
          <div className="col-span-3 rounded-lg border border-dashed border-white/20 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-wider text-white/70">
            Ilustração — dashboard de saúde pública (sem dados reais)
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "alysense") {
    return (
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-line"
        style={{
          background: `radial-gradient(circle at 70% 30%, ${brand.accent}33, transparent 45%), linear-gradient(160deg, ${brand.primary}, ${brand.secondary})`,
        }}
      >
        <div className="text-center">
          <p
            className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
            style={{ textShadow: `0 0 40px ${brand.accent}` }}
          >
            Alysense
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
            IA · Dados · Gestão
          </p>
        </div>
      </div>
    );
  }

  if (project.visual === "ai") {
    return (
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-line"
        style={{
          background: `linear-gradient(135deg, ${brand.primary}, ${brand.secondary})`,
        }}
      >
        <div className="grid grid-cols-3 gap-3 opacity-80">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full border"
              style={{
                borderColor: `${brand.accent}66`,
                background: i % 2 === 0 ? `${brand.accent}33` : "transparent",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[16/10] items-end overflow-hidden rounded-2xl border border-line p-4 font-mono text-xs text-white/80"
      style={{
        background: `linear-gradient(160deg, ${brand.primary}, ${brand.secondary})`,
      }}
    >
      <pre className="whitespace-pre-wrap opacity-80">
{`> Gerenciador de Tarefas
> C# · Listas · Pilhas
> menu interativo`}
      </pre>
    </div>
  );
}
