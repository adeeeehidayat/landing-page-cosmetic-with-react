import { useState } from 'react';

export default function BenefitCard({ Icon, title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem', borderRadius: '4px', cursor: 'default',
        background: hovered ? 'var(--deep)' : 'var(--cream)',
        transition: 'all 0.3s',
      }}
    >
      <div style={{
        width: '48px', height: '48px', borderRadius: '50%', marginBottom: '1.4rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? 'rgba(196,168,130,0.2)' : 'var(--sand)',
        color: hovered ? 'var(--bark)' : 'var(--earth)',
        transition: 'all 0.3s',
      }}>
        <Icon />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-disp)', fontSize: '1.15rem', fontWeight: 400,
        marginBottom: '0.6rem', transition: 'color 0.3s',
        color: hovered ? 'var(--white)' : 'var(--ink)',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.88rem', lineHeight: 1.7, transition: 'color 0.3s',
        color: hovered ? 'rgba(255,255,255,0.65)' : 'var(--earth)',
      }}>
        {desc}
      </p>
    </div>
  );
}
