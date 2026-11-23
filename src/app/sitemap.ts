import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getAllProjectSlugs } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  const projects = getAllProjectSlugs().map((slug) => ({
    url: `${base}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects,
  ];
}
