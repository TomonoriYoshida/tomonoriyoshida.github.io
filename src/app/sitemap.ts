import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

/** This site and the project demos' main pages (all on the same host). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    `${siteUrl}/`,
    `${siteUrl}/medical-facility-frontend/`,
    `${siteUrl}/medical-facility-frontend/events`,
    `${siteUrl}/medical-facility-frontend/about`,
  ].map((url) => ({ url }));
}
