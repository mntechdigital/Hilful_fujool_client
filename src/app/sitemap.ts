import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://hilfulfujultoursandtravels.com",
      priority: 1,
      lastModified: now,
      changeFrequency: "daily",
    },
    {
      url: "https://hilfulfujultoursandtravels.com/about-us",
      priority: 0.8,
      lastModified: now,
      changeFrequency: "monthly",
    },
    {
      url: "https://hilfulfujultoursandtravels.com/hajj-packages",
      priority: 0.8,
      lastModified: now,
      changeFrequency: "weekly",
    },
    {
      url: "https://hilfulfujultoursandtravels.com/services",
      priority: 0.8,
      lastModified: now,
      changeFrequency: "weekly",
    },
    {
      url: "https://hilfulfujultoursandtravels.com/gallery",
      priority: 0.8,
      lastModified: now,
      changeFrequency: "weekly",
    },
    {
      url: "https://hilfulfujultoursandtravels.com/blogs",
      priority: 0.8,
      lastModified: now,
      changeFrequency: "yearly",
    },
    {
      url: "https://hilfulfujultoursandtravels.com/contact-us",
      priority: 0.8,
      lastModified: now,
      changeFrequency: "monthly",
    },
  ];
}