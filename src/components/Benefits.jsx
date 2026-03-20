import { BENEFITS } from '../data';
import BenefitCard from './BenefitCard';

export default function Benefits() {
  return (
    <section id="manfaat" style={{ padding: '7rem 2rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.8rem' }}>
            Keunggulan Kami
          </div>
          <h2 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--ink)' }}>
            Mengapa Memilih <em style={{ fontStyle: 'italic' }}>PureGlow?</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {BENEFITS.map(({ Icon, title, desc }) => (
            <BenefitCard key={title} Icon={Icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
