const testimonials = [
  {
    name: 'Khalid A.',
    location: 'Seef, Bahrain',
    car: 'BMW 535i',
    quote: 'Had my BMW in for a full service. The driver arrived on time, the garage sent me a mid-service update, and my car was back by 5 PM. I didn\'t move from my desk.',
    initials: 'KA',
  },
  {
    name: 'Nour H.',
    location: 'Riffa, Bahrain',
    car: 'Toyota Camry',
    quote: 'Finally — an app that actually understands how inconvenient the old way was. Booking took two minutes. The rest I forgot about until my car was at my door.',
    initials: 'NH',
  },
  {
    name: 'Faisal M.',
    location: 'Manama, Bahrain',
    car: 'Audi Q5',
    quote: 'The condition report on pickup gave me real peace of mind. Professional from start to finish. This is what car service should feel like.',
    initials: 'FM',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9933a">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section style={{ padding: '120px 32px', background: '#0e0e0e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={eyebrowStyle}>Early Feedback</p>

        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 300,
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          color: '#f0f0f0',
          marginBottom: 64,
          maxWidth: 480,
        }}>
          Real owners.<br />Real opinions.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: '#1a1a1a',
          border: '1px solid #1a1a1a',
          borderRadius: 16,
          overflow: 'hidden',
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#0e0e0e',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}>
              <Stars />

              <p style={{
                fontSize: 15,
                color: '#b0b0b0',
                lineHeight: 1.7,
                fontWeight: 300,
                fontStyle: 'italic',
                flexGrow: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#777',
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#d0d0d0', marginBottom: 2 }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: 11, color: '#444', letterSpacing: '0.03em' }}>
                    {t.location} · {t.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: 13,
            color: '#444',
            fontWeight: 300,
          }}>
            Beta feedback from our early access group in Bahrain
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
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
