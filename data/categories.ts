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
    coverImage: '/paris/4832 Montmartre Cabaret le Carillon 1 SS Huile 10F 72DPI.jpg',
  },
  {
    slug: 'paysages',
    name: 'Paysages',
    description: 'Des campagnes françaises aux horizons lointains, une invitation au voyage et à la contemplation.',
    coverImage: '/paysages/4553 Au-delà de St Urcize Huile 6F 72DPI.jpg',
  },
  {
    slug: 'marines',
    name: 'Marines',
    description: 'La mer dans tous ses états : calme, tempétueuse, au lever du soleil ou sous les étoiles.',
    coverImage: '/marines/4570 Honfleur La voile rouge Huile 6F 72DPI.jpg',
  },
  {
    slug: 'venise',
    name: 'Venise',
    description: 'La Sérénissime vue par les yeux d\'une artiste éprise de lumière et de reflets sur l\'eau.',
    coverImage: '/venise/3966 Soir de Venise Huile 40P 72DPI.jpg',
  },
  {
    slug: 'scenes-de-genres',
    name: 'Scènes de genres',
    description: 'Instantanés de vie, moments fugaces saisis avec tendresse et humanité.',
    coverImage: '/scenes-de-genres/4597 Plaisir du jeu Huile 60M 72DPI.jpg',
  },
  {
    slug: 'portraits',
    name: 'Portraits',
    description: 'Des visages qui racontent des histoires, des regards qui traversent le temps.',
    coverImage: '/portraits/4874 Auto portrait Huile 38x46 72DPI.jpg',
  },
  {
    slug: 'nus',
    name: 'Nus',
    description: 'Le corps humain célébré dans sa beauté naturelle, avec grâce et délicatesse.',
    coverImage: '/nus/DSC_8309 Nu aux fleurs.jpg',
  },
  {
    slug: 'fleurs-bouquets',
    name: 'Fleurs & Bouquets',
    description: 'La nature dans sa plus grande splendeur : fleurs épanouies, bouquets généreux, couleurs vibrantes.',
    coverImage: '/fleurs-bouquets/5333 Giroflées Huile toile 8F Chou 72DPI.jpg',
  },
];
