import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { packages } from "@/content/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/perjalanan",
    "/visa-umroh",
    "/kemitraan",
    "/tentang-kami",
    "/konsultasi",
  ];

  const now = new Date();

  return [
    ...routes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...packages.map((p) => ({
      url: `${site.url}/perjalanan/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
