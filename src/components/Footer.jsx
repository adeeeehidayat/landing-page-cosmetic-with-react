import { FOOTER_LINKS } from '../data';

const SOCIAL_ICONS = ['📘', '📸', '🎵'];
const LEGAL_LINKS = ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Cookie'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', padding: '4rem 2rem 2rem', color: 'rgba(255,255,255,0.55)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: 'var(--font-disp)', fontSize: '1.8rem', color: 'var(--white)', fontStyle: 'italic', marginBottom: '1rem' }}>
              PureGlow
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Kosmetik premium bebas bahan berbahaya. Karena kecantikan sejati dimulai dari kemurnian bahan.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.4rem' }}>
              {SOCIAL_ICONS.map((icon, i) => (
                <div key={i} style={{
                  width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer',
                  background: 'rgba(255,255,255,0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem',
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ title, items }) => (
            <div key={title}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.2rem' }}>
                {title}
              </div>
              {items.map(item => (
                <div
                  key={item}
                  style={{ fontSize: '0.85rem', marginBottom: '0.65rem', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--bark)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ fontSize: '0.75rem' }}>© 2026 PureGlow. Semua hak dilindungi.</div>
          <div style={{ fontSize: '0.75rem', display: 'flex', gap: '1.5rem' }}>
            {LEGAL_LINKS.map(link => (
              <span key={link} style={{ cursor: 'pointer' }}>{link}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
