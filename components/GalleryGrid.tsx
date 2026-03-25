'use client';

import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import type { Painting } from '@/data/paintings';

interface GalleryGridProps {
  paintings: Painting[];
}

export default function GalleryGrid({ paintings }: GalleryGridProps) {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {paintings.map((painting) => (
          <Card key={painting.id} painting={painting} onClick={setSelected} />
        ))}
      </div>
      <Modal painting={selected} onClose={() => setSelected(null)} />
    </>
  );
}
