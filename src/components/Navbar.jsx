import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../icons';

const NAV_LINKS = ['Tentang', 'Produk', 'Manfaat', 'Testimoni'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-link:hover  { color: var(--accent) !important; }
        .nav-btn:hover   { background: var(--accent) !important; border-color: var(--accent) !important; color: var(--white) !important; }
        .mob-link:hover  { color: var(--bark) !important; }
        @media (max-width: 768px) {
          .desktop-nav    { display: none !important; }
          .mob-menu-btn   { display: block !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2.5rem', height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(253,250,246,0.90)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,168,130,0.2)' : 'none',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-disp)', fontSize: '1.6rem', fontWeight: 400,
          letterSpacing: '0.08em', fontStyle: 'italic', textDecoration: 'none',
          color: scrolled ? 'var(--ink)' : 'var(--white)',
        }}>
          PureGlow
        </a>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {NAV_LINKS.map(label => (
            <span
              key={label}
              onClick={() => scrollTo(label.toLowerCase())}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
                color: scrolled ? 'var(--deep)' : 'rgba(255,255,255,0.88)',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </span>
          ))}
          <button
            className="nav-btn"
            onClick={() => scrollTo('produk')}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '0.55rem 1.4rem', borderRadius: '2px', cursor: 'pointer',
              background: 'transparent', transition: 'all 0.2s',
              border: `1px solid ${scrolled ? 'var(--accent)' : 'rgba(255,255,255,0.6)'}`,
              color: scrolled ? 'var(--accent)' : 'var(--white)',
            }}
          >
            Belanja
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mob-menu-btn"
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            color: scrolled ? 'var(--ink)' : 'var(--white)',
          }}
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--ink)', zIndex: 200,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2.5rem',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: '1.2rem', right: '1.5rem',
              background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white)',
            }}
          >
            <CloseIcon />
          </button>
          {NAV_LINKS.map(label => (
            <span
              key={label}
              onClick={() => scrollTo(label.toLowerCase())}
              className="mob-link"
              style={{
                fontFamily: 'var(--font-disp)', fontSize: '2.2rem',
                color: 'var(--white)', fontStyle: 'italic', cursor: 'pointer',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
