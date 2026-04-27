const services = [
  { icon: '⬡', name: 'Oil Change', sub: 'Engine & filter service' },
  { icon: '⬡', name: 'Tyre Service', sub: 'Change, rotation & balance' },
  { icon: '⬡', name: 'AC Service', sub: 'Regas & system check' },
  { icon: '⬡', name: 'Brake Service', sub: 'Pads, discs & fluid' },
  { icon: '⬡', name: 'Battery', sub: 'Test, replace & jump start' },
  { icon: '⬡', name: 'Detailing', sub: 'Interior & exterior clean' },
  { icon: '⬡', name: 'Periodic Service', sub: 'Full scheduled maintenance' },
  { icon: '⬡', name: 'Roadside Assist', sub: 'Emergency support' },
  { icon: '⬡', name: 'Inspection', sub: 'Pre-purchase & safety check' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 32px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 64,
        }}>
          <div>
            <p style={eyebrowStyle}>Services</p>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#f0f0f0',
              maxWidth: 500,
            }}>
              Everything your car needs.<br />One app.
            </h2>
          </div>
          <p style={{
            fontSize: 14,
            color: '#555',
            fontWeight: 300,
            fontStyle: 'italic',
            maxWidth: 260,
            textAlign: 'right',
            lineHeight: 1.6,
          }}>
            Don&apos;t see what you need?<br />Request a custom service in the app.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: '#1a1a1a',
          border: '1px solid #1a1a1a',
          borderRadius: 16,
          overflow: 'hidden',
        }} className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#0e0e0e',
                padding: '28px 28px',
                cursor: 'default',
                transition: 'background 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#141414'}
              onMouseLeave={e => e.currentTarget.style.background = '#0e0e0e'}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: '#1a1a1a',
                border: '1px solid #222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                color: '#c9933a',
              }}>
                ●
              </div>
              <div>
                <p style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#e0e0e0',
                  letterSpacing: '-0.01em',
                  marginBottom: 4,
                }}>
                  {s.name}
                </p>
                <p style={{
                  fontSize: 12,
                  color: '#444',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                }}>
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

const eyebrowStyle = {
  fontSize: 12,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#c9933a',
  fontWeight: 500,
  marginBottom: 24,
}
