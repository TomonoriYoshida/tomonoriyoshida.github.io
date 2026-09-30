import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

/**
 * Crawlers only read robots.txt at the host's root, so this user site's file
 * also covers the project sites under it (their own robots.txt is ignored).
 *
 * The medical facility demo's detail pages (~220k, /facility?id=) are
 * rendered in the browser from the demo API: crawling them would load a
 * single small API server and, once its per-IP rate limit kicks in, get error
 * pages indexed. The same data is published by the regional health bureaus.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/medical-facility-frontend/facility",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
