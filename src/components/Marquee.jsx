import { MARQUEE_ITEMS } from '../data';

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div style={{ background: 'var(--accent)', padding: '0.85rem 0', overflow: 'hidden' }}>
      <div style={{
        display: 'flex', whiteSpace: 'nowrap', width: 'max-content',
        animation: 'marquee 28s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--white)', marginRight: '3rem', opacity: 0.9,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
