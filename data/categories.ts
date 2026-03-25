export interface Category {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
}

export const categories: Category[] = [
  {
    slug: 'paris',
    name: 'Paris',
    description: 'Les rues, les monuments et l\'âme de la Ville Lumière capturés à travers un regard sensible et poétique.',
    coverImage: '/paris/vieux-montmartre.jpg',
  },
  {
    slug: 'paysages',
    name: 'Paysages',
    description: 'Des campagnes françaises aux horizons lointains, une invitation au voyage et à la contemplation.',
    coverImage: '/paysages/les-monts.jpg',
  },
  {
    slug: 'marines',
    name: 'Marines',
    description: 'La mer dans tous ses états : calme, tempétueuse, au lever du soleil ou sous les étoiles.',
    coverImage: '/marines/cassis.jpg',
  },
  {
    slug: 'venise',
    name: 'Venise',
    description: 'La Sérénissime vue par les yeux d\'une artiste éprise de lumière et de reflets sur l\'eau.',
    coverImage: '/venise/soir-a-venise.jpg',
  },
  {
    slug: 'scenes-de-genres',
    name: 'Scènes de genres',
    description: 'Instantanés de vie, moments fugaces saisis avec tendresse et humanité.',
    coverImage: '/scenes-de-genres/la-chorale.jpg',
  },
  {
    slug: 'portraits',
    name: 'Portraits',
    description: 'Des visages qui racontent des histoires, des regards qui traversent le temps.',
    coverImage: '/portraits/le-gondolier-mauve.jpg',
  },
  {
    slug: 'nus',
    name: 'Nus',
    description: 'Le corps humain célébré dans sa beauté naturelle, avec grâce et délicatesse.',
    coverImage: '/nus/la-farandole.jpg',
  },
  {
    slug: 'fleurs-bouquets',
    name: 'Fleurs & Bouquets',
    description: 'La nature dans sa plus grande splendeur : fleurs épanouies, bouquets généreux, couleurs vibrantes.',
    coverImage: '/fleurs-bouquets/bouquet-au-vase-bleu.jpg',
  },
];
