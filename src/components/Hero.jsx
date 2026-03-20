import { ArrowIcon } from '../icons';

const STATS = [
  ['10K+', 'Pelanggan Puas'],
  ['50+', 'Produk Alami'],
  ['0%', 'Bahan Berbahaya'],
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(150deg, var(--deep) 0%, var(--earth) 55%, var(--bark) 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '5rem 2rem 4rem',
    }}>
      {/* Decorative rings */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: '340px', height: '340px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(193,127,90,0.2), transparent 70%)', pointerEvents: 'none' }} />

      {/* Floating orbs */}
      <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '15%', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(196,168,130,0.15)', backdropFilter: 'blur(4px)' }} />
      <div className="animate-float delay-2" style={{ position: 'absolute', bottom: '28%', left: '10%', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />

      <div style={{ textAlign: 'center', maxWidth: '780px', position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div className="animate-fade-in" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px',
          padding: '0.4rem 1rem', marginBottom: '2rem',
          fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.85)',
        }}>
          <span style={{ color: 'var(--bark)', fontSize: '1rem' }}>✦</span>
          100% Bebas Bahan Berbahaya
        </div>

        <h1 className="animate-fade-up invisible" style={{
          fontFamily: 'var(--font-disp)', fontWeight: 300,
          fontSize: 'clamp(3.2rem, 8vw, 7rem)', lineHeight: 1.05,
          color: 'var(--white)', marginBottom: '1.8rem', letterSpacing: '-0.01em',
        }}>
          Kecantikan<br />
          <em style={{ fontStyle: 'italic', color: 'var(--bark)' }}>Alami & Bebas</em>
        </h1>

        <p className="animate-fade-up invisible delay-2" style={{
          fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)',
          maxWidth: '500px', margin: '0 auto 3rem', fontWeight: 300,
        }}>
          Produk kosmetik premium bebas paraben, bebas sulfat, cruelty-free, dan ramah lingkungan. Kecantikan sejati dimulai dari bahan yang murni.
        </p>

        <div className="animate-fade-up invisible delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('produk')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.9rem 2.2rem', background: 'var(--accent)',
              border: 'none', color: 'var(--white)', fontFamily: 'var(--font-body)',
              fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', borderRadius: '2px', transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(193,127,90,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Lihat Koleksi <ArrowIcon />
          </button>

          <button
            onClick={() => scrollTo('tentang')}
            style={{
              padding: '0.9rem 2.2rem', background: 'transparent',
              border: '1px solid rgba(255,255,255,0.35)', color: 'var(--white)',
              fontFamily: 'var(--font-body)', fontSize: '0.82rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', borderRadius: '2px', transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Pelajari Lebih Lanjut
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-up invisible delay-4" style={{
          display: 'flex', justifyContent: 'center', gap: '3rem',
          marginTop: '4.5rem', flexWrap: 'wrap',
        }}>
          {STATS.map(([number, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-disp)', fontSize: '2.2rem', color: 'var(--bark)', lineHeight: 1 }}>{number}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        <span>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
      </div>
    </section>
  );
}
