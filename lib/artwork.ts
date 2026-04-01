import { categories, type Category } from '@/data/categories';
import type { Painting } from '@/data/paintings';

const ARTIST_NAME = 'Lyne Seybel';

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getArtistPortraitAlt(): string {
  return `Portrait de l'artiste peintre ${ARTIST_NAME}`;
}

export function getCategoryImageAlt(category: Category): string {
  return `Collection ${category.name} de ${ARTIST_NAME}`;
}

export function getPaintingAlt(painting: Painting): string {
  const category = getCategoryBySlug(painting.category);

  return [
    `${painting.title}, oeuvre de ${ARTIST_NAME}`,
    category ? `collection ${category.name}` : null,
    painting.technique,
    painting.dimensions,
  ]
    .filter(Boolean)
    .join(', ');
}

export function getCategoryPageTitle(category: Category): string {
  return `Tableaux de ${category.name}`;
}

export function getCategoryPageDescription(category: Category, paintingCount: number): string {
  const worksLabel = `${paintingCount} oeuvre${paintingCount > 1 ? 's' : ''}`;

  return `${category.description} Explorez ${worksLabel} originales de ${ARTIST_NAME} dans la collection ${category.name.toLowerCase()}.`;
}

export function getCategoryKeywords(category: Category): string[] {
  const normalizedName = category.name.toLowerCase();

  return [
    category.name,
    `tableaux ${normalizedName}`,
    `peintures ${normalizedName}`,
    `${normalizedName} impressionniste`,
  ];
}