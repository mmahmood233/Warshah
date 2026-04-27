import { useInView } from '../hooks/useInView'

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
    before: "No idea what's happening or how long it takes",
    after: 'Real-time status updates at every stage',
  },
]

export default function Problem() {
  const [headRef, headIn] = useInView()
  const [gridRef, gridIn] = useInView()

  return (
    <section style={{ padding: '130px 32px', background: '#0e0e0e' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div ref={headRef} className={`reveal${headIn ? ' visible' : ''}`}>
          <span className="accent-line" />
          <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f0f0f0', marginBottom: 20, maxWidth: 680 }}>
            Getting your car serviced<br />shouldn&apos;t take your whole day.
          </h2>
          <p style={{ fontSize: 17, color: '#555', fontWeight: 300, lineHeight: 1.7, maxWidth: 460, marginBottom: 80 }}>
            Car service in Bahrain was overdue for an upgrade. Convenient, transparent, professional — every time.
          </p>
        </div>

        <div ref={gridRef} className={`reveal-children${gridIn ? ' visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#1a1a1a', borderRadius: 16, overflow: 'hidden' }}
          className2="problem-grid">
          {shifts.map((s, i) => (
            <div key={i} style={{ background: '#0e0e0e' }}>
              {/* Before */}
              <div style={{ padding: '32px 28px 22px', borderBottom: '1px solid #1a1a1a' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#383838', marginBottom: 14, fontWeight: 500 }}>
                  The old way
                </p>
                <p style={{ fontSize: 15, color: '#484848', lineHeight: 1.65, fontWeight: 300 }}>
                  {s.before}
                </p>
              </div>
              {/* Arrow bridge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', height: 0, position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#0e0e0e', border: '1px solid #2a2a2a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 1,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M2 6l3 3 3-3" stroke="#c9933a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* After */}
              <div style={{ padding: '22px 28px 32px' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9933a', marginBottom: 14, fontWeight: 500 }}>
                  With Warshah
                </p>
                <p style={{ fontSize: 15, color: '#c0c0c0', lineHeight: 1.65, fontWeight: 300 }}>
                  {s.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .problem-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:768px){ .problem-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}
