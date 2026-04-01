import type { Metadata } from 'next';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { getArtistPortraitAlt } from '@/lib/artwork';
import { absoluteUrl, buildPageMetadata, siteConfig } from '@/lib/seo';

const aboutDescription =
  'Biographie et parcours artistique de Lyne Seybel, peintre francaise contemporaine, originaire de Bourges et inspiree par Paris, la Normandie, Venise et l\'Auvergne.';

export const metadata: Metadata = buildPageMetadata({
  title: 'A propos',
  description: aboutDescription,
  path: '/about',
  image: '/lyne-seybel.jpg',
  imageAlt: getArtistPortraitAlt(),
  keywords: [
    ...siteConfig.keywords,
    'biographie artiste peintre',
    'parcours artistique',
    'artiste francaise',
  ],
});

export default function AboutPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `A propos de ${siteConfig.artistName}`,
    description: aboutDescription,
    url: absoluteUrl('/about'),
    inLanguage: siteConfig.language,
    about: {
      '@id': absoluteUrl('/#artist'),
    },
    mainEntity: {
      '@type': 'Person',
      '@id': absoluteUrl('/#artist'),
      name: siteConfig.artistName,
      jobTitle: siteConfig.artistJobTitle,
      image: absoluteUrl('/lyne-seybel.jpg'),
      description: aboutDescription,
      url: siteConfig.url,
      homeLocation: {
        '@type': 'Place',
        name: 'Paris, France',
      },
      workLocation: [
        { '@type': 'Place', name: 'Paris' },
        { '@type': 'Place', name: 'Normandie' },
        { '@type': 'Place', name: 'Venise' },
        { '@type': 'Place', name: 'Auvergne' },
      ],
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Biographie</p>
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white">À propos</h1>
        </div>

        {/* Main bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              Bien qu&apos;originaire de Bourges, Lyne Seybel a toujours vécu à Paris, y partageant son temps avec la Normandie, la Côte d&apos;Azur près d&apos;Eze, l&apos;Auvergne et Venise qu&apos;elle affectionne particulièrement.
            </p>
            <p>
              Sa vocation de dessin est présente dès son enfance, utilisant des carnets qu&apos;elle porte toujours sur elle, saisissant les mouvements de la vie, les couleurs, la poésie du moment, l&apos;humour des gens. Elle suit alors, en élève libre, les cours des Beaux-Arts et de l&apos;École du Louvre, dessine beaucoup d&apos;après l&apos;Antique dans les galeries du Musée du Louvre, parcourt Paris par tous les temps avec son chevalet.
            </p>
            <p>
              Au cours de divers voyages, elle rencontre à Deauville Pierre Bonnard qui s&apos;intéresse beaucoup à ses carnets et l&apos;encourage ardemment à continuer. Au Cannet, elle revoit ce grand maître avec lequel elle a de longs entretiens sur les jeux de la lumière et des couleurs, l&apos;expression de sa sensibilité, les résonnances de l&apos;âme.
            </p>
            <p>
              Elle fréquente l&apos;Académie Frochot à Pigalle, où Toulouse-Lautrec a tant travaillé, y perfectionnant son dessin pour que chaque œuvre devienne en elle-même un véritable petit tableau. Elle travaille à la Grande Chaumière à Montparnasse et surtout dans l&apos;atelier d&apos;André Lhote, où Henri Goetz lui apporte son soutien. Il comprend sa façon personnelle de peindre, où la matière riche irradie la lumière intérieure d&apos;un sujet construit, dans des couleurs en harmonies heureuses ou parfois audacieuses.
            </p>
            <p>
              Elle devient sociétaire des Artistes Français et Artistes Indépendants. Ses œuvres sont remarquées et elle est sollicitée pour exposer tant à Paris qu&apos;en province et à l&apos;étranger. Au cours de ses différentes expositions personnelles, elle est toujours très émue de constater qu&apos;elle apporte un message de joie, de bonheur, de profonde harmonie à un public de toutes les nationalités.
            </p>
            <p>
              Elle séjourne de plus en plus souvent à Venise, où elle s&apos;imprègne des brumes de lumière où les ors pâles succèdent et se mêlent aux nacres roses des levers du jour. Il n&apos;est pas rare de la voir, au petit matin, son chevalet dressé, fixant sur la toile les nuances fugitives, la légèreté de l&apos;air, les couleurs diaphanes. À l&apos;opposé, les tons chauds et flamboyants des crépuscules à Venise suscitent en elle une exubérance de couleurs dans un décor presque théâtral.
            </p>
            <p>
              En Auvergne, elle dialogue avec la nature. Les champs sont pour elle source d&apos;émotions profondes, par la multiplicité, le mouvement des couleurs, la transparence de l&apos;air, la musicalité de la lumière. Sur la côte Normande, elle retrouve cette douce musicalité des couleurs, la transparence de l&apos;air, la lumière iridescente.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <Image
                src="/lyne-seybel.jpg"
                alt={getArtistPortraitAlt()}
                width={558}
                height={368}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-center text-gray-400 dark:text-gray-500 italic">Lyne Seybel</p>

            {/* Critic quote */}
            <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 mt-8">
              <p className="text-gray-500 dark:text-gray-400 italic leading-relaxed text-base">
                « Elle médite devant ses lieux d&apos;élection, la mer le plus souvent, et son infini qui incite au rêve et à l&apos;évasion. Être artiste, c&apos;est une nécessité absolue, vitale. Lyne Seybel en témoigne. Son œuvre, jouissance esthétique, est aussi objet de méditation devant la Beauté. Elle possède le don de transmettre la fluidité de l&apos;eau, d&apos;instiller à la matière la lumière, opérant une transfiguration du réel sans le dénaturer. »
              </p>
              <footer className="mt-3 text-sm text-gray-400 dark:text-gray-500">— Nicole Lamothe, critique d&apos;Art</footer>
            </blockquote>
          </div>
        </div>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Parcours Artistique</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              { year: 'Enfance', text: 'Vocation du dessin : carnets de croquis portés en permanence pour saisir les mouvements de la vie, les couleurs, la poésie du moment' },
              { year: 'Formation', text: 'Cours en élève libre aux Beaux-Arts de Paris et à l\'École du Louvre — dessins d\'après l\'Antique au Musée du Louvre, chevalet dans les rues de Paris' },
              { year: 'Rencontre', text: 'Rencontre à Deauville et au Cannet avec Pierre Bonnard, qui l\'encourage ardemment et partage avec elle de longs entretiens sur les jeux de lumière et de couleurs' },
              { year: 'Académies', text: 'Fréquentation de l\'Académie Frochot à Pigalle (où Toulouse-Lautrec a travaillé), puis de la Grande Chaumière à Montparnasse et de l\'atelier d\'André Lhote' },
              { year: 'Atelier Lhote', text: 'Henri Goetz lui apporte son soutien dans l\'atelier d\'André Lhote, comprenant sa façon personnelle de peindre où la matière riche irradie la lumière intérieure' },
              { year: 'Salons', text: 'Devient sociétaire des Artistes Français et Artistes Indépendants — expositions personnelles à Paris, en province et à l\'étranger' },
              { year: 'Normandie', text: 'Séjours réguliers en Normandie : brumes, lumières iridescentes, marines (« Bateaux à Barfleur », « Brume en Cotentin »…)' },
              { year: 'Auvergne', text: 'Voyages annuels dans le Cantal : nappes de couleurs vives, paysages rythmés (« Les monts », « Lever du jour en Auvergne »…)' },
              { year: 'Venise', text: 'Séjours de plus en plus fréquents à Venise — ors pâles des aubes et tons flamboyants des crépuscules (« Aube à Venise », « Soir de Venise »…)' },
            ].map(({ year, text }) => (
              <div key={year} className="flex gap-6 items-start">
                <span className="font-playfair text-lg font-bold text-gray-300 dark:text-gray-700 w-24 shrink-0 pt-0.5">{year}</span>
                <div className="flex-1 border-l-2 border-gray-100 dark:border-gray-800 pl-6">
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        {/* <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
          >
            Me contacter
          </Link>
        </div> */}
      </div>
    </>
  );
}
