import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://www.junkacar.ca/sitemap.xml", host: "https://www.junkacar.ca" };
}
