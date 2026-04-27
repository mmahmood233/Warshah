import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

function CountStat({ value, suffix, label, started, delay = 0, duration = 1600 }) {
  const count = useCounter(value, duration, started)
  return (
    <div style={{
      textAlign: 'center', padding: '20px 24px',
      opacity: started ? 1 : 0,
      transform: started ? 'translateY(0)' : 'translateY(12px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      <div style={{ fontSize: 30, fontWeight: 300, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
        {started ? count.toLocaleString() : '0'}{suffix}
      </div>
      <div style={{ fontSize: 11, color: '#444', marginTop: 5, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 400 }}>
        {label}
      </div>
    </div>
  )
}

function TextStat({ value, label, started, delay = 0 }) {
  return (
    <div style={{
      textAlign: 'center', padding: '20px 24px',
      opacity: started ? 1 : 0,
      transform: started ? 'translateY(0)' : 'translateY(12px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      <div style={{ fontSize: 30, fontWeight: 300, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: '#444', marginTop: 5, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 400 }}>
        {label}
      </div>
    </div>
  )
}

export default function TrustBar() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <section ref={ref} style={{ borderTop: '1px solid #161616', borderBottom: '1px solid #161616', background: '#0a0a0a' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
      }} className="trust-grid">
        {[
          { component: 'count', value: 1200, suffix: '+', label: 'Car owners waiting', delay: 0 },
          { component: 'count', value: 40,   suffix: '+', label: 'Verified garages',   delay: 80 },
          { component: 'count', value: 15,   suffix: '+', label: 'Services available', delay: 160 },
          { component: 'text',  value: 'BH',              label: 'Launching here first',delay: 240 },
        ].map((s, i) => (
          <div key={i} style={{ borderRight: i < 3 ? '1px solid #161616' : 'none' }} className="trust-cell">
            {s.component === 'count'
              ? <CountStat value={s.value} suffix={s.suffix} label={s.label} started={inView} delay={s.delay} />
              : <TextStat  value={s.value}                   label={s.label} started={inView} delay={s.delay} />
            }
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:640px){
          .trust-grid{ grid-template-columns:repeat(2,1fr) !important; }
          .trust-cell{ border-right:none !important; border-bottom:1px solid #161616; }
          .trust-cell:nth-child(odd){ border-right:1px solid #161616 !important; }
          .trust-cell:nth-last-child(-n+2){ border-bottom:none !important; }
        }
      `}</style>
    </section>
  )
}
