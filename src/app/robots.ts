import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api", "/check-email"],
      },
    ],
    sitemap: "https://hilfulfujultoursandtravels.com/sitemap.xml",
  };
}
