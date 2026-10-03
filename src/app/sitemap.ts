import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

/** This site and the project demos' main pages (all on the same host). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    `${siteUrl}/`,
    // The demo is built with trailingSlash: true; /events redirects to /events/.
    `${siteUrl}/medical-facility-frontend/`,
    `${siteUrl}/medical-facility-frontend/nearby/`,
    `${siteUrl}/medical-facility-frontend/dashboard/`,
    `${siteUrl}/medical-facility-frontend/events/`,
    `${siteUrl}/medical-facility-frontend/about/`,
  ].map((url) => ({ url }));
}
