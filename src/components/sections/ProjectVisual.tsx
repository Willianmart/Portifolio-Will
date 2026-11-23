import Image from "next/image";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Original SVG cover art for project cards and detail heroes. */
export function ProjectVisual({
  project,
  priority = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-panel",
        className,
      )}
    >
      <Image
        src={withBasePath(project.coverSrc)}
        alt={`Arte visual do projeto ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
