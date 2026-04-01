'use client';

import { useEffect } from 'react';
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="my-4 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900 md:max-h-[90vh] md:flex-row"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="painting-title"
            >
              <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 md:flex-1 md:p-6">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="block h-auto max-h-[70vh] w-auto max-w-full object-contain md:max-h-[calc(90vh-3rem)]"
                  decoding="async"
                  loading="eager"
                />
              </div>

              <div className="flex flex-col justify-between p-6 md:w-[22rem] md:max-h-[90vh] md:overflow-y-auto">
                <div>
                  <button
                    onClick={onClose}
                    className="mb-4 ml-auto flex text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200"
                    aria-label="Fermer"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 id="painting-title" className="mb-3 font-playfair text-2xl font-bold text-gray-900 dark:text-white">{painting.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{painting.description}</p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-400 dark:text-gray-500">Technique</dt>
                      <dd className="text-right font-medium text-gray-700 dark:text-gray-200">{painting.technique}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-400 dark:text-gray-500">Dimensions</dt>
                      <dd className="text-right font-medium text-gray-700 dark:text-gray-200">{painting.dimensions}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-400 dark:border-gray-800 dark:text-gray-600">
                  © Lyne Seybel — Tous droits réservés
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
