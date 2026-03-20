const ABOUT_STATS = [
  ['2019', 'Tahun Berdiri'],
  ['50+', 'Bahan Aktif Alami'],
  ['100%', 'Transparan'],
];

export default function Tentang() {
  return (
    <section id="tentang" style={{ padding: '7rem 2rem', background: 'var(--white)' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '6rem', alignItems: 'center',
      }}>
        {/* Visual panel */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%', aspectRatio: '4/5',
            background: 'linear-gradient(135deg, var(--sand) 0%, var(--bark) 100%)',
            borderRadius: '4px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: '10%', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.4)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: 'var(--white)' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌿</div>
                <div style={{ fontFamily: 'var(--font-disp)', fontSize: '1.4rem', fontStyle: 'italic', opacity: 0.85 }}>
                  Pure. Natural. Free.
                </div>
              </div>
            </div>
          </div>

          {/* Floating rating card */}
          <div style={{
            position: 'absolute', bottom: '-2rem', right: '-2rem',
            background: 'var(--white)', padding: '1.4rem 1.8rem',
            boxShadow: '0 12px 40px rgba(61,43,31,0.15)',
            borderRadius: '4px', minWidth: '180px',
          }}>
            <div style={{ fontFamily: 'var(--font-disp)', fontSize: '2.4rem', color: 'var(--accent)', lineHeight: 1 }}>5★</div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.06em', color: 'var(--earth)', marginTop: '0.3rem' }}>
              Rating rata-rata<br />dari 10.000+ ulasan
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>
            Tentang PureGlow
          </div>
          <h2 style={{
            fontFamily: 'var(--font-disp)', fontWeight: 300,
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15,
            color: 'var(--ink)', marginBottom: '1.6rem',
          }}>
            Kecantikan yang<br />
            <em style={{ fontStyle: 'italic', color: 'var(--earth)' }}>Tidak Berkompromi</em>
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--earth)', marginBottom: '1.2rem' }}>
            PureGlow lahir dari keyakinan bahwa kecantikan sejati tidak harus mengorbankan kesehatan kulit, hewan, ataupun bumi. Kami memformulasikan setiap produk dengan bahan-bahan pilihan yang aman, efektif, dan bertanggung jawab.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--earth)', marginBottom: '2.5rem' }}>
            Setiap produk kami telah melalui uji dermatologis ketat, 100% bebas dari 1.300+ bahan berbahaya yang dilarang Uni Eropa, dan dikemas dalam kemasan yang dapat didaur ulang.
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {ABOUT_STATS.map(([number, label]) => (
              <div key={label} style={{ borderLeft: '2px solid var(--bark)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-disp)', fontSize: '1.6rem', color: 'var(--ink)' }}>{number}</div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--earth)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tentang > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
