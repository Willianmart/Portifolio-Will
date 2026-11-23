import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Renders the site brand mark: WillianMart.DEV */
export function BrandMark({
  className,
  accentClassName,
}: {
  className?: string;
  accentClassName?: string;
}) {
  const brand = profile.brand;
  const dotIndex = brand.lastIndexOf(".");
  const main = dotIndex >= 0 ? brand.slice(0, dotIndex) : brand;
  const suffix = dotIndex >= 0 ? brand.slice(dotIndex) : "";

  return (
    <span className={cn("font-semibold tracking-tight text-ink", className)}>
      {main}
      <span className={cn("text-accent", accentClassName)}>{suffix}</span>
    </span>
  );
}
