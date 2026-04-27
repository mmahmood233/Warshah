import { useInView } from '../hooks/useInView'

const pillars = [
  { label: 'Certified Technicians', body: 'Every garage employs qualified mechanics trained on modern vehicles. No untrained hands touch your car.' },
  { label: 'Transparent Pricing',   body: 'Full quote before you confirm. What you see is what you pay — no hidden fees, ever.' },
  { label: 'Service Guarantee',     body: "If something isn't right after the service, we make it right. Your satisfaction is part of the contract." },
]

const vettingSteps = [
  'Licence & certification review',
  'In-person facility inspection',
  'Technician qualification check',
  'Customer feedback monitoring',
]

export default function GarageQuality() {
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  return (
    <section id="garages" style={{ padding: '130px 32px', background: '#0b0b0b', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'flex-start' }} id="quality-grid">

          {/* Left */}
          <div ref={leftRef} className={`reveal${leftIn ? ' visible' : ''}`}>
            <span className="accent-line" />
            <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#f0f0f0', marginBottom: 20 }}>
              Every garage is vetted.<br />Not just listed.
            </h2>
            <p style={{ fontSize: 16, color: '#505050', fontWeight: 300, lineHeight: 1.7, marginBottom: 48, maxWidth: 400 }}>
              We audit every partner garage for quality, certification, and customer standards before they appear on Warshah.
            </p>

            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#333', fontWeight: 500, marginBottom: 20 }}>
              How we vet garages
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {vettingSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1px solid #2a2a2a', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#c9933a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#4a4a4a', fontWeight: 300 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className={`reveal-children${rightIn ? ' visible' : ''}`}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                padding: '32px 0',
                borderBottom: i < pillars.length - 1 ? '1px solid #161616' : 'none',
                borderTop: i === 0 ? '1px solid #161616' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#c9933a', flexShrink: 0 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: '#e0e0e0', letterSpacing: '-0.01em' }}>
                    {p.label}
                  </h3>
                </div>
                <p style={{ fontSize: 14, color: '#4a4a4a', lineHeight: 1.7, fontWeight: 300, paddingLeft: 14 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:768px){ #quality-grid{ grid-template-columns:1fr !important; gap:60px !important; } }
      `}</style>
    </section>
  )
}
