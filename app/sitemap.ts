import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { getFeaturedPaintings, getPaintingsByCategory } from '@/data/paintings';
import { absoluteUrl } from '@/lib/seo';

function uniqueImageUrls(paths: string[]): string[] {
  return [...new Set(paths.map((path) => absoluteUrl(path)))];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const featuredPaintings = getFeaturedPaintings();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: uniqueImageUrls(['/lyne-seybel.jpg', ...featuredPaintings.map((painting) => painting.image)]),
    },
    {
      url: absoluteUrl('/about'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: uniqueImageUrls(['/lyne-seybel.jpg']),
    },
    ...categories.map((category) => {
      const paintings = getPaintingsByCategory(category.slug);

      return {
        url: absoluteUrl(`/category/${category.slug}`),
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        images: uniqueImageUrls([category.coverImage, ...paintings.map((painting) => painting.image)]),
      };
    }),
  ];
}