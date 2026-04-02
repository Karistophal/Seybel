export interface Painting {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  dimensions: string;
  technique: string;
  featured?: boolean;
}

import { fleursBouquetsPaintings } from "./paintings/fleurs-bouquets";
import { marinesPaintings } from "./paintings/marines";
import { nusPaintings } from "./paintings/nus";
import { parisPaintings } from "./paintings/paris";
import { paysagesPaintings } from "./paintings/paysages";
import { portraitsPaintings } from "./paintings/portraits";
import { scenesDeGenresPaintings } from "./paintings/scenes-de-genres";
import { venisePaintings } from "./paintings/venise";

export const paintings: Painting[] = [
  ...nusPaintings,
  ...marinesPaintings,
  ...portraitsPaintings,
  ...parisPaintings,
  ...fleursBouquetsPaintings,
  ...paysagesPaintings,
  ...scenesDeGenresPaintings,
  ...venisePaintings,
];


export function getPaintingsByCategory(categorySlug: string): Painting[] {
  return paintings.filter((p) => p.category === categorySlug);
}

export function getFeaturedPaintings(): Painting[] {
  return paintings.filter((p) => p.featured);
}
