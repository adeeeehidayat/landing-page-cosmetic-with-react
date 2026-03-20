import { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data';
import ProductCard from './ProductCard';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="produk" style={{ padding: '7rem 2rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.8rem' }}>
            Koleksi Kami
          </div>
          <h2 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '1rem' }}>
            Produk <em style={{ fontStyle: 'italic' }}>Pilihan</em>
          </h2>
          <p style={{ color: 'var(--earth)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Setiap produk diformulasikan dengan bahan aktif alami pilihan tanpa kompromi.
          </p>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {PRODUCT_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1.2rem', borderRadius: '100px', cursor: 'pointer',
                  border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid var(--sand)',
                  background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                  color: activeCategory === cat ? 'var(--white)' : 'var(--earth)',
                  fontFamily: 'var(--font-body)', fontSize: '0.78rem',
                  letterSpacing: '0.06em', transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.5rem' }}>
          {filtered.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
