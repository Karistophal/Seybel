import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-3">Lyne Seybel</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Peintre française moderne. Œuvres à l'huile, gouache, aquarelle, pastel, fusain, pierre noire et gravure.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Catégories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">À propos</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Lyne Seybel. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
