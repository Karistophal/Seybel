'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Painting } from '@/data/paintings';

interface CardProps {
  painting: Painting;
  onClick: (painting: Painting) => void;
}

export default function Card({ painting, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
      onClick={() => onClick(painting)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 dark:bg-gray-800">
        <Image
          src={painting.image}
          alt={painting.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
          <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="font-playfair text-lg font-semibold leading-tight">{painting.title}</p>
            <p className="text-sm text-white/80">{painting.technique} · {painting.year}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-playfair font-medium text-gray-900 dark:text-white leading-snug">{painting.title}</h3>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{painting.technique} · {painting.dimensions}</p>
      </div>
    </motion.div>
  );
}
