import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl mb-10 md:mb-14", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{lead}</p>
      ) : null}
    </header>
  );
}
