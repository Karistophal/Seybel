export interface Painting {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  dimensions: string;
  technique: string;
  year: number;
  featured?: boolean;
}

export const paintings: Painting[] = [
  {
    id: "la-farandole-1980",
    title: "La farandole",
    category: "nus",
    image: "/nus/la-farandole.jpg",
    description: "",
    dimensions: "21x30x2 cm",
    technique: "Pastel",
    year: 1980,
  },
  {
    id: "cassis-1980",
    title: "Cassis",
    category: "marines",
    image: "/marines/cassis.jpg",
    description: "",
    dimensions: "38x46x4 cm",
    technique: "Huile",
    year: 1980,
    featured: true,
  },
  {
    id: "le-gondolier-mauve-1980",
    title: "Le gondolier mauve",
    category: "portraits",
    image: "/portraits/le-gondolier-mauve.jpg",
    description: "",
    dimensions: "73x100x4 cm",
    technique: "Huile",
    year: 1980,
    featured: true,
  },
  {
    id: "vieux-montmartre-1980",
    title: "Vieux Montmartre",
    category: "paris",
    image: "/paris/vieux-montmartre.jpg",
    description: "",
    dimensions: "61x50x2 cm",
    technique: "Huile sur toile",
    year: 1980,
    featured: true,
  },
  {
    id: "les-tournesols-1980",
    title: "Les tournesols",
    category: "fleurs-bouquets",
    image: "/fleurs-bouquets/les-tournesols.jpg",
    description: "",
    dimensions: "65x46x4 cm",
    technique: "Huile",
    year: 1980,
  },
  {
    id: "elise-et-le-printemps",
    title: "Elise et le printemps",
    category: "portraits",
    image: "/portraits/elise-et-le-printemps.jpg",
    description: "",
    dimensions: "46x65 cm",
    technique: "Huile sur toile",
    year: 1980,
    featured: true,
  },
  {
    id: "bouquet-au-vase-bleu",
    title: "Bouquet au vase bleu",
    category: "fleurs-bouquets",
    image: "/fleurs-bouquets/bouquet-au-vase-bleu.jpg",
    description: "",
    dimensions: "42x29 cm",
    technique: "Pastel sur papier",
    year: 1980,
  },
  {
    id: "les-monts",
    title: "Les Monts",
    category: "paysages",
    image: "/paysages/les-monts.jpg",
    description: "",
    dimensions: "33x41 cm",
    technique: "Huile sur toile",
    year: 1980,
  },
  {
    id: "la-chorale",
    title: "La chorale",
    category: "scenes-de-genres",
    image: "/scenes-de-genres/la-chorale.jpg",
    description: "",
    dimensions: "65x92 cm",
    technique: "Huile sur toile",
    year: 1980,
    featured: true,
  },
  {
    id: "soir-a-venise",
    title: "Soir à Venise",
    category: "venise",
    image: "/venise/soir-a-venise.jpg",
    description: "",
    dimensions: "73x100 cm",
    technique: "Huile sur toile",
    year: 1980,
  },
];


export function getPaintingsByCategory(categorySlug: string): Painting[] {
  return paintings.filter((p) => p.category === categorySlug);
}

export function getFeaturedPaintings(): Painting[] {
  return paintings.filter((p) => p.featured);
}
