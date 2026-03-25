import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { categories } from '@/data/categories';
import { getPaintingsByCategory } from '@/data/paintings';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  console.log("BUILD PARAMS:", categories);
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} — Lyne Seybel`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const paintings = getPaintingsByCategory(slug);

  return (
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
  );
}
