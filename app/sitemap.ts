import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/systems",
    "/sectors",
    "/capabilities",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/security",
  ];

  return pages.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}
