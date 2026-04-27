const pillars = [
  {
    label: 'Certified Technicians',
    body: 'Every garage employs qualified mechanics trained on modern vehicles. No untrained hands touch your car.',
  },
  {
    label: 'Transparent Pricing',
    body: 'Get a full quote before you confirm. What you see is what you pay — no hidden fees, ever.',
  },
  {
    label: 'Service Guarantee',
    body: 'If something isn\'t right after the service, we make it right. Your satisfaction is part of the contract.',
  },
]

const vettingSteps = [
  'Licence & certification review',
  'In-person facility inspection',
  'Technician qualification check',
  'Customer feedback monitoring',
]

export default function GarageQuality() {
  return (
    <section id="garages" style={{ padding: '120px 32px', background: '#f7f5f2' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#c9933a',
          fontWeight: 500,
          marginBottom: 24,
        }}>
          Our Standard
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'flex-start',
        }} className="quality-grid">

          <div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              color: '#111',
              marginBottom: 20,
            }}>
              Every garage is vetted.<br />Not just listed.
            </h2>
            <p style={{
              fontSize: 16,
              color: '#777',
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 420,
            }}>
              We audit every partner garage for quality, certification, and customer
              standards before they appear on Warshah.
            </p>

            {/* Vetting steps */}
            <p style={{
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#bbb',
              fontWeight: 500,
              marginBottom: 16,
            }}>
              How we vet garages
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {vettingSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: '#111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#c9933a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#555', fontWeight: 300 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                padding: '32px 0',
                borderBottom: i < pillars.length - 1 ? '1px solid #e8e5e0' : 'none',
                borderTop: i === 0 ? '1px solid #e8e5e0' : 'none',
              }}>
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#111',
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                }}>
                  {p.label}
                </h3>
                <p style={{
                  fontSize: 14,
                  color: '#888',
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quality-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  )
}
