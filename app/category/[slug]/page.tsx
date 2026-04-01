import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import GalleryGrid from '@/components/GalleryGrid';
import { categories } from '@/data/categories';
import { getPaintingsByCategory } from '@/data/paintings';
import {
  getCategoryBySlug,
  getCategoryImageAlt,
  getCategoryKeywords,
  getCategoryPageDescription,
  getCategoryPageTitle,
  getPaintingAlt,
} from '@/lib/artwork';
import { absoluteUrl, buildPageMetadata, siteConfig } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const paintings = getPaintingsByCategory(slug);

  return buildPageMetadata({
    title: getCategoryPageTitle(category),
    description: getCategoryPageDescription(category, paintings.length),
    path: `/category/${slug}`,
    image: category.coverImage,
    imageAlt: getCategoryImageAlt(category),
    keywords: [...siteConfig.keywords, ...getCategoryKeywords(category)],
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const paintings = getPaintingsByCategory(slug);
  const pageTitle = getCategoryPageTitle(category);
  const pageDescription = getCategoryPageDescription(category, paintings.length);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: pageDescription,
    url: absoluteUrl(`/category/${slug}`),
    inLanguage: siteConfig.language,
    image: [
      absoluteUrl(category.coverImage),
      ...paintings.map((painting) => absoluteUrl(painting.image)),
    ],
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: paintings.length,
      itemListElement: paintings.map((painting, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'VisualArtwork',
          name: painting.title,
          description: painting.description,
          image: absoluteUrl(painting.image),
          artMedium: painting.technique,
          genre: category.name,
          size: painting.dimensions,
          creator: {
            '@type': 'Person',
            name: siteConfig.artistName,
            url: siteConfig.url,
          },
          alternateName: getPaintingAlt(painting),
        },
      })),
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Collection</p>
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">{category.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">{category.description}</p>
          <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">{paintings.length} œuvre{paintings.length > 1 ? 's' : ''}</p>
        </div>

        {paintings.length > 0 ? (
          <GalleryGrid paintings={paintings} />
        ) : (
          <p className="text-center text-gray-400 dark:text-gray-600 py-16">Aucune œuvre dans cette catégorie pour le moment.</p>
        )}
      </div>
    </>
  );
}
