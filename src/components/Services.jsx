import { useInView } from '../hooks/useInView'

const services = [
  { name: 'Oil Change',        sub: 'Engine & filter service' },
  { name: 'Tyre Service',      sub: 'Change, rotation & balance' },
  { name: 'AC Service',        sub: 'Regas & full system check' },
  { name: 'Brake Service',     sub: 'Pads, discs & fluid' },
  { name: 'Battery',           sub: 'Test, replace & jump start' },
  { name: 'Detailing',         sub: 'Interior & exterior clean' },
  { name: 'Periodic Service',  sub: 'Full scheduled maintenance' },
  { name: 'Roadside Assist',   sub: 'Emergency support' },
  { name: 'Inspection',        sub: 'Pre-purchase & safety check' },
]

export default function Services() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView({ threshold: 0.08 })

  return (
    <section id="services" style={{ padding: '130px 32px', background: '#080808', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div ref={headRef} className={`reveal${headIn ? ' visible' : ''}`}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <span className="accent-line" />
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f0f0f0', maxWidth: 500 }}>
              Everything your car<br />needs. One app.
            </h2>
          </div>
          <p style={{ fontSize: 13, color: '#444', fontWeight: 300, fontStyle: 'italic', maxWidth: 220, textAlign: 'right', lineHeight: 1.65 }}>
            Don&apos;t see what you need?<br />Request a custom service in the app.
          </p>
        </div>

        <div ref={gridRef}
          className={`reveal-children${gridIn ? ' visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#161616', borderRadius: 14, overflow: 'hidden', border: '1px solid #161616' }}
          id="svc-grid">
          {services.map((s, i) => (
            <div key={i}
              style={{ background: '#0a0a0a', padding: '26px 24px', cursor: 'default', transition: 'background 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#101010'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9933a', marginBottom: 16, opacity: 0.7 }} />
              <p style={{ fontSize: 14, fontWeight: 500, color: '#d8d8d8', letterSpacing: '-0.01em', marginBottom: 5 }}>
                {s.name}
              </p>
              <p style={{ fontSize: 12, color: '#3e3e3e', fontWeight: 300 }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:640px){ #svc-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
