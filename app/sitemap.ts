import type { MetadataRoute } from 'next';
import { countries, countryPath, topicPath, topics } from '@/lib/content';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/laender'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/ratgeber'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/faq'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/ueber-uns'), changeFrequency: 'yearly', priority: 0.4 },
    { url: absoluteUrl('/kontakt'), changeFrequency: 'yearly', priority: 0.4 },
  ];
  const guides: MetadataRoute.Sitemap = [
    ...countries.map((guide) => ({
      url: absoluteUrl(countryPath(guide)),
      lastModified: guide.updated,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...topics.map((guide) => ({
      url: absoluteUrl(topicPath(guide)),
      lastModified: guide.updated,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
  return [...staticPages, ...guides];
}
