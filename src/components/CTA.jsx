import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section style={{ padding: '7rem 2rem', background: 'linear-gradient(135deg, var(--cream), var(--sand))' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.8rem' }}>
          Bergabunglah
        </div>
        <h2 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--ink)', marginBottom: '1rem' }}>
          Dapatkan <em style={{ fontStyle: 'italic', color: 'var(--earth)' }}>Diskon 15%</em><br />
          untuk Pembelian Pertama
        </h2>
        <p style={{ color: 'var(--earth)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Daftarkan email Anda dan dapatkan kode diskon eksklusif, tips kecantikan alami, serta info produk terbaru langsung di inbox Anda.
        </p>

        {submitted ? (
          <div style={{
            padding: '1.2rem 2rem', background: 'var(--green)',
            borderRadius: '2px', color: 'var(--white)', fontSize: '0.9rem', display: 'inline-block',
          }}>
            ✓ Terima kasih! Kode diskon sudah dikirim ke email Anda.
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Email kamu..."
              style={{
                flex: 1, minWidth: '200px', padding: '0.85rem 1.2rem',
                border: '1px solid var(--bark)', borderRadius: '2px',
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                background: 'var(--white)', color: 'var(--ink)', outline: 'none',
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                padding: '0.85rem 2rem', background: 'var(--accent)',
                border: 'none', color: 'var(--white)', borderRadius: '2px', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--earth)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; }}
            >
              Daftar
            </button>
          </div>
        )}

        <p style={{ fontSize: '0.7rem', color: 'var(--earth)', opacity: 0.6, marginTop: '1rem' }}>
          Tidak ada spam. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </section>
  );
}
