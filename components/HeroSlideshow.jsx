'use client';
import { useState, useEffect, useCallback } from 'react';

/**
 * Slideshow background untuk header/hero.
 * Urutan slide:
 *   [0] = tampilan AWAL  → lampiran gambar KEDUA  → public/hero-1.jpg
 *   [1] = tampilan KEDUA → lampiran gambar PERTAMA → public/hero-2.jpg
 * Ganti/isi file foto di folder public dengan nama di bawah ini.
 */
const SLIDES = ['/hero-1.jpg', '/hero-2.jpg'];

export default function HeroSlideshow({ children, interval = 6000 }) {
  const [idx, setIdx] = useState(0);
  const go = useCallback((n) => setIdx((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % SLIDES.length), interval);
    return () => clearInterval(t);
  }, [interval]);

  return (
    <section className="p-hero">
      <div className="p-hero-bg">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`p-hero-slide${i === idx ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="p-hero-overlay" />
      </div>

      <button className="p-hero-nav prev" onClick={() => go(idx - 1)} aria-label="Slide sebelumnya">‹</button>
      <button className="p-hero-nav next" onClick={() => go(idx + 1)} aria-label="Slide berikutnya">›</button>

      <div className="p-hero-inner">{children}</div>

      <div className="p-hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`p-hero-dot${i === idx ? ' is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
