const shifts = [
  {
    before: 'Call five garages to find availability',
    after: 'Browse verified garages and book in seconds',
  },
  {
    before: 'Drive there, wait, drive back — half a day gone',
    after: 'We collect your car. You stay where you are.',
  },
  {
    before: 'No idea what\'s happening or how long it takes',
    after: 'Real-time status updates at every stage',
  },
]

export default function Problem() {
  return (
    <section style={{ padding: '120px 32px', background: '#0e0e0e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={eyebrowStyle}>The Problem</p>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 300,
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          color: '#f0f0f0',
          marginBottom: 20,
          maxWidth: 700,
        }}>
          Getting your car serviced<br />
          shouldn&apos;t take your whole day.
        </h2>

        <p style={{
          fontSize: 17,
          color: '#666',
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: 500,
          marginBottom: 80,
        }}>
          We built Warshah because car service in Bahrain was overdue for an upgrade.
          Convenient, transparent, and professional — every time.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: '#1a1a1a',
          border: '1px solid #1a1a1a',
          borderRadius: 16,
          overflow: 'hidden',
        }} className="problem-grid">
          {shifts.map((s, i) => (
            <div key={i} style={{ background: '#0e0e0e' }}>
              {/* Before */}
              <div style={{
                padding: '32px 28px 24px',
                borderBottom: '1px solid #1a1a1a',
              }}>
                <p style={{
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#444',
                  marginBottom: 12,
                  fontWeight: 500,
                }}>
                  Before
                </p>
                <p style={{
                  fontSize: 15,
                  color: '#555',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}>
                  {s.before}
                </p>
              </div>
              {/* After */}
              <div style={{ padding: '24px 28px 32px' }}>
                <p style={{
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#c9933a',
                  marginBottom: 12,
                  fontWeight: 500,
                }}>
                  With Warshah
                </p>
                <p style={{
                  fontSize: 15,
                  color: '#c8c8c8',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}>
                  {s.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
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
