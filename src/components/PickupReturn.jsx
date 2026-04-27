const pillars = [
  {
    icon: '◎',
    title: 'Licensed & insured drivers',
    body: 'Every driver is background-checked, licensed, and covered under our transport insurance policy.',
  },
  {
    icon: '◉',
    title: 'Condition documented',
    body: 'Your car is photographed on pickup and return. Any pre-existing marks are logged and shared with you.',
  },
  {
    icon: '◈',
    title: 'Full visibility',
    body: 'Track your car\'s status in real time — pickup confirmed, at the garage, service done, on the way back.',
  },
]

export default function PickupReturn() {
  return (
    <section style={{
      padding: '120px 32px',
      background: '#0e0e0e',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1,
        height: '100%',
        background: 'linear-gradient(to bottom, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="pickup-grid">

          {/* Left — text */}
          <div>
            <p style={eyebrowStyle}>Pickup & Return</p>

            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#f0f0f0',
              marginBottom: 24,
            }}>
              We come<br />to you.
            </h2>

            <p style={{
              fontSize: 17,
              color: '#666',
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: 52,
              maxWidth: 420,
            }}>
              Schedule a pickup from your home, office, or anywhere. Our team handles the logistics.
              Your car comes back done — you don&apos;t move an inch.
            </p>

            <a
              href="#waitlist"
              style={{
                display: 'inline-block',
                background: '#c9933a',
                color: '#000',
                padding: '13px 28px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Schedule a Pickup
            </a>
          </div>

          {/* Right — pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                padding: '28px 0',
                borderBottom: i < pillars.length - 1 ? '1px solid #1a1a1a' : 'none',
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
              }}>
                <div style={{
                  fontSize: 18,
                  color: '#c9933a',
                  marginTop: 2,
                  flexShrink: 0,
                  lineHeight: 1,
                }}>
                  {p.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#e0e0e0',
                    marginBottom: 8,
                    letterSpacing: '-0.01em',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: '#555',
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pickup-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
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
