import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import ThemeProvider from '@/components/ThemeProvider';
import { getArtistPortraitAlt } from '@/lib/artwork';
import { absoluteUrl, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.artistName }],
  creator: siteConfig.artistName,
  publisher: siteConfig.artistName,
  keywords: [...siteConfig.keywords],
  category: 'art',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        width: 1200,
        height: 630,
        alt: getArtistPortraitAlt(),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const rootStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      '@id': absoluteUrl('/#artist'),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl('/#artist'),
    name: siteConfig.artistName,
    jobTitle: siteConfig.artistJobTitle,
    description: siteConfig.description,
    image: absoluteUrl(siteConfig.defaultOgImage),
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    knowsAbout: [
      'huile',
      'acrylique',
      'pastel',
      'Paris',
      'Venise',
      'marines',
      'paysages',
      'portraits',
      'bouquets',
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-inter">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <StructuredData data={rootStructuredData} />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
