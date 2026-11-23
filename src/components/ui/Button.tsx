"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost" | "soft";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow hover:brightness-110 border border-transparent",
  ghost:
    "bg-transparent text-ink border border-line hover:border-accent/50 hover:bg-surface/60",
  soft: "bg-surface text-ink border border-line hover:border-accent/40",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas min-h-11",
    styles[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          className={classes}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
