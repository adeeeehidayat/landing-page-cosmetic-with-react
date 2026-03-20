import { useState } from 'react';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--white)', borderRadius: '4px', overflow: 'hidden',
        border: hovered ? '1px solid var(--bark)' : '1px solid transparent',
        boxShadow: hovered ? '0 16px 40px rgba(61,43,31,0.12)' : '0 2px 8px rgba(61,43,31,0.06)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      {/* Product image area */}
      <div style={{
        height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--sand), var(--cream))',
        position: 'relative', fontSize: '5rem',
      }}>
        {product.emoji}
        <span style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'var(--accent)', color: 'var(--white)',
          fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '0.25rem 0.65rem', borderRadius: '100px',
        }}>
          {product.tag}
        </span>
      </div>

      {/* Product info */}
      <div style={{ padding: '1.6rem' }}>
        <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark)', marginBottom: '0.4rem' }}>
          {product.category}
        </div>
        <h3 style={{ fontFamily: 'var(--font-disp)', fontSize: '1.3rem', color: 'var(--ink)', fontWeight: 400, marginBottom: '0.6rem' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--earth)', lineHeight: 1.65, marginBottom: '1.4rem' }}>
          {product.desc}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-disp)', fontSize: '1.25rem', color: 'var(--accent)', fontWeight: 600 }}>
            {product.price}
          </span>
          <button style={{
            padding: '0.5rem 1.2rem',
            background: hovered ? 'var(--accent)' : 'var(--deep)',
            color: 'var(--white)', border: 'none', borderRadius: '2px', cursor: 'pointer',
            fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            fontFamily: 'var(--font-body)', transition: 'background 0.2s',
          }}>
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
