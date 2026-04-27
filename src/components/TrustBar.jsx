const stats = [
  { value: '1,200+', label: 'Car owners waiting' },
  { value: '40+', label: 'Verified garages' },
  { value: '15+', label: 'Services available' },
  { value: 'Bahrain', label: 'Launching here first' },
]

export default function TrustBar() {
  return (
    <section style={{
      borderTop: '1px solid #1e1e1e',
      borderBottom: '1px solid #1e1e1e',
      background: '#111',
      padding: '28px 32px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
      }} className="trust-grid">
        {stats.map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '12px 24px',
            borderRight: i < stats.length - 1 ? '1px solid #222' : 'none',
          }} className="trust-item">
            <div style={{
              fontSize: 28,
              fontWeight: 300,
              color: '#f0f0f0',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              {s.value}
            </div>
            <div style={{
              fontSize: 12,
              color: '#555',
              marginTop: 4,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-item {
            border-right: none !important;
            border-bottom: 1px solid #222;
          }
          .trust-item:nth-child(odd) {
            border-right: 1px solid #222 !important;
          }
          .trust-item:nth-last-child(-n+2) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  )
}
