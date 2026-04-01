import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import StructuredData from '@/components/StructuredData';
import { getFeaturedPaintings } from '@/data/paintings';
import { categories } from '@/data/categories';
import { getArtistPortraitAlt, getCategoryImageAlt } from '@/lib/artwork';
import { absoluteUrl, buildPageMetadata, siteConfig } from '@/lib/seo';

const homeDescription =
  'Galerie de peinture en ligne dediee aux oeuvres de Lyne Seybel, artiste peintre francaise contemporaine inspiree par Paris, Venise, la mer, les paysages et les bouquets.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Galerie de peintures contemporaines',
  description: homeDescription,
  path: '/',
  image: '/lyne-seybel.jpg',
  imageAlt: getArtistPortraitAlt(),
  keywords: [
    ...siteConfig.keywords,
    'galerie d art en ligne',
    'tableaux contemporains',
    'oeuvres originales',
  ],
});

export default function HomePage() {
  const featured = getFeaturedPaintings();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Galerie de peintures de Lyne Seybel',
    description: homeDescription,
    url: absoluteUrl('/'),
    inLanguage: siteConfig.language,
    about: {
      '@id': absoluteUrl('/#artist'),
    },
    image: [
      absoluteUrl('/lyne-seybel.jpg'),
      ...featured.slice(0, 6).map((painting) => absoluteUrl(painting.image)),
    ],
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categories.map((category, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(`/category/${category.slug}`),
        item: {
          '@type': 'CollectionPage',
          name: category.name,
          description: category.description,
          image: absoluteUrl(category.coverImage),
        },
      })),
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div>
        {/* Hero Carousel */}
        <Carousel paintings={featured} />

        {/* Artist Bio */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <Image
                src="/lyne-seybel.jpg"
                alt={getArtistPortraitAlt()}
                width={558}
                height={368}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">L&apos;Artiste</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Lyne Seybel
              </h1>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Originaire de Bourges, Lyne Seybel a toujours vécu à Paris, partageant son temps avec la Normandie, la Côte d&apos;Azur près d&apos;Eze, l&apos;Auvergne et Venise. Sa vocation de dessin est présente dès l&apos;enfance, carnets en main pour saisir les mouvements de la vie, les couleurs, la poésie du moment.
                </p>
                <p>
                  Formée en élève libre aux Beaux-Arts et à l&apos;École du Louvre, elle a rencontré Pierre Bonnard à Deauville, travaillé dans les ateliers de l&apos;Académie Frochot et d&apos;André Lhote. Sociétaire des Artistes Français et Artistes Indépendants, elle expose en France et à l&apos;étranger.
                </p>
                <p>
                  Son œuvre, à la frontière entre réalisme et impressionnisme, irradie la lumière intérieure d&apos;un sujet construit dans des couleurs en harmonies heureuses ou parfois audacieuses.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="bg-beige dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Explorer</p>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 dark:text-white">Les Œuvres</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100 dark:bg-gray-800 block">
                  <Image
                    src={cat.coverImage}
                    alt={getCategoryImageAlt(cat)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="font-playfair text-white font-semibold text-lg leading-tight">{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
