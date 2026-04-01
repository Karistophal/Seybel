import type { Metadata } from 'next';
import { getArtistPortraitAlt } from '@/lib/artwork';

function normalizeSiteUrl(value: string): string {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return 'http://localhost:3000';
  }

  const siteUrl = trimmedValue.startsWith('http://') || trimmedValue.startsWith('https://')
    ? trimmedValue
    : `https://${trimmedValue}`;

  return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
}

function resolveSiteUrl(): string {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'http://localhost:3000'
  );
}

export const siteConfig = {
  name: 'Lyne Seybel',
  artistName: 'Lyne Seybel',
  artistJobTitle: 'Peintre francaise contemporaine',
  description:
    'Galerie en ligne des oeuvres de Lyne Seybel, peintre francaise contemporaine. Tableaux a l\'huile, acryliques et pastels inspires par Paris, Venise, les marines, les paysages et les bouquets.',
  language: 'fr-FR',
  locale: 'fr_FR',
  defaultOgImage: '/lyne-seybel.jpg',
  url: resolveSiteUrl(),
  keywords: [
    'Lyne Seybel',
    'artiste peintre',
    'peintre francaise contemporaine',
    'tableaux originaux',
    'galerie de peinture',
    'huile sur toile',
    'acrylique',
    'pastel',
    'peintures de Paris',
    'peintures de Venise',
    'marines',
    'paysages',
    'portraits',
    'bouquets de fleurs',
  ],
} as const;

export function absoluteUrl(path = '/'): string {
  return new URL(path, siteConfig.url).toString();
}

function buildFullTitle(title?: string): string {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}

interface BuildPageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
}

export function buildPageMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image = siteConfig.defaultOgImage,
  imageAlt = getArtistPortraitAlt(),
  keywords = [...siteConfig.keywords],
}: BuildPageMetadataOptions): Metadata {
  const fullTitle = buildFullTitle(title);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}