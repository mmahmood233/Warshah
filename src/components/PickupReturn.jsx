import { useInView } from '../hooks/useInView'

const pillars = [
  { icon: '01', title: 'Licensed & insured drivers', body: 'Every driver is background-checked, licensed, and covered under our transport insurance policy.' },
  { icon: '02', title: 'Condition documented', body: 'Your car is photographed on pickup and return. Any pre-existing marks are logged and shared with you instantly.' },
  { icon: '03', title: 'Full real-time visibility', body: "Track your car's status live — pickup confirmed, at the garage, service complete, on the way back." },
]

export default function PickupReturn() {
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  return (
    <section style={{ padding: '130px 32px', background: '#0e0e0e', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }} id="pickup-grid">

          {/* Left */}
          <div ref={leftRef} className={`reveal${leftIn ? ' visible' : ''}`}>
            <span className="accent-line" />
            <h2 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.08, color: '#f0f0f0', marginBottom: 24 }}>
              We come<br />to you.
            </h2>
            <p style={{ fontSize: 17, color: '#555', fontWeight: 300, lineHeight: 1.7, marginBottom: 48, maxWidth: 400 }}>
              Schedule a pickup from your home, office, or anywhere. Our team handles the logistics.
              Your car comes back done — you don&apos;t move an inch.
            </p>
            <a href="#waitlist" style={btn}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Schedule a Pickup
            </a>
          </div>

          {/* Right */}
          <div ref={rightRef} className={`reveal-children${rightIn ? ' visible' : ''}`}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                display: 'flex', gap: 24, alignItems: 'flex-start',
                padding: '28px 0',
                borderBottom: i < pillars.length - 1 ? '1px solid #161616' : 'none',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: '#111', border: '1px solid #1e1e1e',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 500, color: '#c9933a',
                  letterSpacing: '0.04em', flexShrink: 0,
                }}>
                  {p.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 500, color: '#e0e0e0', marginBottom: 8, letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#4a4a4a', lineHeight: 1.65, fontWeight: 300 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #pickup-grid{ grid-template-columns:1fr !important; gap:56px !important; }
        }
      `}</style>
    </section>
  )
}

const btn = {
  display: 'inline-block', background: '#c9933a', color: '#000',
  padding: '13px 28px', borderRadius: 10, fontSize: 14, fontWeight: 500,
  textDecoration: 'none', letterSpacing: '0.01em',
  transition: 'opacity 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
}
