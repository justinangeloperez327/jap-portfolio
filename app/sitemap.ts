import type { MetadataRoute } from "next";

import { projects } from "@/data";
import { getAbsoluteUrl } from "@/lib/site-url";

const staticRoutes = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/skills",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.6,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map(
    (route) => ({
      url: getAbsoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: getAbsoluteUrl(
        `/projects/${project.slug}`,
      ),
      changeFrequency: "monthly",
      priority: project.featured ? 0.8 : 0.7,
    }),
  );

  return [...pages, ...projectPages];
}
