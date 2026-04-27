import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'Book your service',
    body: 'Choose what your car needs and pick a garage from our vetted partner network. Get a transparent quote before you confirm.',
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
  const [headRef, headIn] = useInView()
  const [stepsRef, stepsIn] = useInView()

  return (
    <section id="how-it-works" style={{ padding: '130px 32px', background: '#080808' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div ref={headRef} className={`reveal${headIn ? ' visible' : ''}`}>
          <span className="accent-line" />
          <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f0f0f0', marginBottom: 88, maxWidth: 480 }}>
            Three steps.<br />Zero hassle.
          </h2>
        </div>

        <div ref={stepsRef}
          className={`reveal-children${stepsIn ? ' visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48 }}
          id="steps-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Oversized number */}
              <div style={{ fontSize: 100, fontWeight: 300, color: '#131313', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: -20, userSelect: 'none', pointerEvents: 'none' }}>
                {s.num}
              </div>

              {/* Connecting rule */}
              {i < 2 && (
                <div style={{ position: 'absolute', top: 46, right: -24, width: 48, height: 1, background: 'linear-gradient(to right,#222,transparent)' }} className="step-rule" />
              )}

              <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 500, color: '#ebebeb', letterSpacing: '-0.01em', marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, fontWeight: 300 }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72, paddingTop: 32, borderTop: '1px solid #141414', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#c9933a', flexShrink: 0 }} />
          <p style={{ fontSize: 14, color: '#444', fontWeight: 300, fontStyle: 'italic' }}>
            Track your car&apos;s status at every step — from pickup to return — directly in the app.
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #steps-grid{ grid-template-columns:1fr !important; gap:52px !important; }
          .step-rule{ display:none !important; }
        }
      `}</style>
    </section>
  )
}
