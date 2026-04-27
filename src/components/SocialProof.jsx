import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    initials: 'KA', name: 'Khalid A.', location: 'Seef', car: 'BMW 535i',
    quote: "Had my BMW in for a full service on a Tuesday. The driver arrived on time, the garage sent me a mid-service update, and my car was back by 5 PM. I didn't move from my desk.",
  },
  {
    initials: 'NH', name: 'Nour H.', location: 'Riffa', car: 'Toyota Camry',
    quote: "Finally — an app that actually understands how inconvenient the old way was. Booking took two minutes. The rest I forgot about until my car was back at my door.",
  },
  {
    initials: 'FM', name: 'Faisal M.', location: 'Manama', car: 'Audi Q5',
    quote: "The condition report on pickup gave me real peace of mind. Professional from start to finish. This is what car service should feel like.",
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c9933a">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView({ threshold: 0.1 })

  return (
    <section style={{ padding: '130px 32px', background: '#0e0e0e', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div ref={headRef} className={`reveal${headIn ? ' visible' : ''}`}>
          <span className="accent-line" />
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f0f0f0', marginBottom: 64, maxWidth: 440 }}>
            Real owners.<br />Real opinions.
          </h2>
        </div>

        <div ref={gridRef}
          className={`reveal-children${gridIn ? ' visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#161616', borderRadius: 14, overflow: 'hidden', border: '1px solid #161616' }}
          id="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: '#0a0a0a', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 28 }}>
              <Stars />
              <p style={{ fontSize: 15, color: '#7a7a7a', lineHeight: 1.75, fontWeight: 300, fontStyle: 'italic', flexGrow: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: '#141414', border: '1px solid #222',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 500, color: '#555', letterSpacing: '0.06em', flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#c8c8c8', marginBottom: 3 }}>{t.name}</p>
                  <p style={{ fontSize: 11, color: '#383838', letterSpacing: '0.02em' }}>
                    {t.location}, Bahrain · {t.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 32, textAlign: 'center', fontSize: 12, color: '#303030', fontWeight: 300 }}>
          Early feedback from our beta access group in Bahrain
        </p>
      </div>

      <style>{`
        @media(max-width:768px){ #testimonials-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}
