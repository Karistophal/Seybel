'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Painting } from '@/data/paintings';

interface CarouselProps {
  paintings: Painting[];
}

export default function Carousel({ paintings }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % paintings.length);
  }, [paintings.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + paintings.length) % paintings.length);
  }, [paintings.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const painting = paintings[current];

  return (
    <div className="relative w-full h-[70vh] min-h-[400px] overflow-hidden bg-gray-100 dark:bg-gray-900">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <Image
              src={painting.image}
              alt={painting.title}
              width={1600}
              height={1200}
              className="h-auto max-h-full w-auto max-w-full object-contain"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-0 right-0 text-center text-white px-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-playfair text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg"
            >
              {painting.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-white/80"
            >
              {painting.technique}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
        aria-label="Précédent"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
        aria-label="Suivant"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {paintings.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`w-2 h-2 cursor-pointer rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
