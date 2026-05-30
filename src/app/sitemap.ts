import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";
import { siteConfig } from "@/lib/metadata";

export const dynamic = "force-static";

const routes = ["/", "/research", "/publications", "/projects", "/notes", "/news", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const noteRoutes = getAllNotes().map((note) => `/notes/${note.slug}`);

  return [...routes, ...noteRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
