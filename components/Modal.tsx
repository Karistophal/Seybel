'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Painting } from '@/data/paintings';

interface ModalProps {
  painting: Painting | null;
  onClose: () => void;
}

export default function Modal({ painting, onClose }: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    if (painting) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [painting, onClose]);

  return (
    <AnimatePresence>
      {painting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative md:w-2/3 aspect-[4/3]">
              <Image
                src={painting.image}
                alt={painting.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            {/* Info */}
            <div className="md:w-1/3 p-6 flex flex-col justify-between">
              <div>
                <button
                  onClick={onClose}
                  className="mb-4 ml-auto flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Fermer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-3">{painting.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{painting.description}</p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-400 dark:text-gray-500">Technique</dt>
                    <dd className="text-gray-700 dark:text-gray-200 font-medium">{painting.technique}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400 dark:text-gray-500">Dimensions</dt>
                    <dd className="text-gray-700 dark:text-gray-200 font-medium">{painting.dimensions}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400 dark:text-gray-500">Année</dt>
                    <dd className="text-gray-700 dark:text-gray-200 font-medium">{painting.year}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
                © Lyne Seybel — Tous droits réservés
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
