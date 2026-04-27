const steps = [
  {
    num: '01',
    title: 'Book your service',
    body: 'Choose what your car needs and select a garage from our vetted partner network. Get a transparent quote before you confirm.',
  },
  {
    num: '02',
    title: 'We collect your car',
    body: 'A licensed driver picks up your car from your home, office, or anywhere you choose — at the time you set.',
  },
  {
    num: '03',
    title: 'Done. Delivered back.',
    body: 'Service complete, car returned to your door. Track every step in the app. No calls. No waiting rooms.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '120px 32px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={eyebrowStyle}>How it works</p>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 300,
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          color: '#f0f0f0',
          marginBottom: 80,
          maxWidth: 540,
        }}>
          Three steps.<br />Zero hassle.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
        }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Big number bg */}
              <div style={{
                fontSize: 96,
                fontWeight: 300,
                color: '#161616',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: -16,
                userSelect: 'none',
              }}>
                {s.num}
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 48,
                  right: -20,
                  width: 40,
                  height: 1,
                  background: '#222',
                }} className="step-connector" />
              )}

              <div style={{
                borderTop: '1px solid #222',
                paddingTop: 28,
              }}>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#f0f0f0',
                  letterSpacing: '-0.01em',
                  marginBottom: 12,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  color: '#666',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#c9933a',
            flexShrink: 0,
          }} />
          <p style={{
            fontSize: 14,
            color: '#555',
            fontWeight: 300,
            fontStyle: 'italic',
          }}>
            Track your car&apos;s status at every step — from pickup to return — directly in the app.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .step-connector {
            display: none !important;
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
