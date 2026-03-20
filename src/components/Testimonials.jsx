import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { StarIcon } from '../icons';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimoni" style={{ padding: '7rem 2rem', background: 'var(--deep)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bark)', marginBottom: '0.8rem' }}>
          Testimoni
        </div>
        <h2 style={{
          fontFamily: 'var(--font-disp)', fontWeight: 300,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--white)',
          marginBottom: '3rem',
        }}>
          Kata Mereka yang <em style={{ fontStyle: 'italic', color: 'var(--bark)' }}>Sudah Merasakan</em>
        </h2>

        {/* Quote card */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', borderRadius: '4px',
          padding: '2.5rem 3rem', border: '1px solid rgba(255,255,255,0.08)',
          minHeight: '220px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginBottom: '1.4rem', color: 'var(--bark)' }}>
            {[...Array(current.stars)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <blockquote style={{
            fontFamily: 'var(--font-disp)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: 'var(--white)', fontWeight: 300, lineHeight: 1.6,
            fontStyle: 'italic', marginBottom: '1.8rem',
          }}>
            "{current.text}"
          </blockquote>
          <div>
            <div style={{ fontWeight: 500, color: 'var(--bark)', fontSize: '0.9rem' }}>{current.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>{current.role}</div>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.8rem' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '28px' : '8px', height: '8px',
                borderRadius: '100px', border: 'none', cursor: 'pointer',
                background: i === activeIndex ? 'var(--accent)' : 'rgba(255,255,255,0.25)',
                transition: 'all 0.3s', padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
