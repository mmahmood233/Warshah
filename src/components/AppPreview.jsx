import { useInView } from '../hooks/useInView'
import { useState } from 'react'

const screens = [
  {
    label: 'Browse & Book',
    ui: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
        {/* Location bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9933a' }} />
          <span style={{ fontSize: 11, color: '#888', fontWeight: 400 }}>Manama, Bahrain</span>
          <svg style={{ marginLeft: 'auto' }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        {/* Section title */}
        <p style={{ fontSize: 14, fontWeight: 500, color: '#f0f0f0', marginBottom: 14, letterSpacing: '-0.01em' }}>Services near you</p>
        {/* Service cards */}
        {[
          { name: 'Oil Change', price: 'From 12 BD', garages: '3 garages', active: true },
          { name: 'Tyre Service', price: 'From 18 BD', garages: '5 garages', active: false },
          { name: 'AC Service', price: 'From 25 BD', garages: '2 garages', active: false },
        ].map((item, i) => (
          <div key={i} style={{
            background: item.active ? 'rgba(201,147,58,0.07)' : '#111',
            border: `1px solid ${item.active ? 'rgba(201,147,58,0.25)' : '#1e1e1e'}`,
            borderRadius: 10, padding: '11px 14px', marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: item.active ? 'rgba(201,147,58,0.15)' : '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.active ? '#c9933a' : '#333' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, fontWeight: 500, color: item.active ? '#e0c080' : '#d0d0d0', marginBottom: 2 }}>{item.name}</p>
              <p style={{ fontSize: 10, color: '#444' }}>{item.price} · {item.garages}</p>
            </div>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        ))}
        {/* Pickup toggle */}
        <div style={{ marginTop: 4, padding: '11px 14px', background: '#0e1a0e', border: '1px solid #1a3a1a', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf50', flexShrink: 0 }} />
          <p style={{ fontSize: 11, color: '#6ab06a', flex: 1 }}>Pickup & return available</p>
          <div style={{ width: 28, height: 16, borderRadius: 8, background: '#4caf50', position: 'relative' }}>
            <div style={{ position: 'absolute', right: 2, top: 2, width: 12, height: 12, borderRadius: '50%', background: '#fff' }} />
          </div>
        </div>
      </div>
    )
  },
  {
    label: 'Live Tracking',
    ui: () => (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Car info */}
        <div style={{ padding: '12px', background: '#111', border: '1px solid #1e1e1e', borderRadius: 10, marginBottom: 18 }}>
          <p style={{ fontSize: 11, color: '#555', marginBottom: 4 }}>Service in progress</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#f0f0f0', letterSpacing: '-0.01em' }}>Toyota Camry 2022</p>
          <p style={{ fontSize: 10, color: '#c9933a', marginTop: 2 }}>Al-Noor Garage · Seef</p>
        </div>
        {/* Timeline */}
        <p style={{ fontSize: 10, color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Status</p>
        {[
          { label: 'Picked up', time: '10:15 AM', done: true },
          { label: 'At Al-Noor Garage', time: '10:42 AM', done: true },
          { label: 'Service in progress', time: 'Now', active: true },
          { label: 'On the way back', time: '—', done: false },
          { label: 'Delivered', time: '—', done: false },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < 4 ? 16 : 0 }}>
            {/* Line + dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 14 }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                background: s.done ? '#c9933a' : s.active ? 'transparent' : '#1e1e1e',
                border: s.active ? '2px solid #c9933a' : 'none',
                boxShadow: s.active ? '0 0 8px rgba(201,147,58,0.5)' : 'none',
              }} />
              {i < 4 && <div style={{ width: 1, flex: 1, background: s.done ? '#2a2a2a' : '#181818', marginTop: 3 }} />}
            </div>
            <div style={{ paddingTop: 1 }}>
              <p style={{ fontSize: 12, color: s.done ? '#666' : s.active ? '#f0f0f0' : '#2e2e2e', fontWeight: s.active ? 500 : 300, marginBottom: 2 }}>{s.label}</p>
              <p style={{ fontSize: 10, color: s.done ? '#444' : s.active ? '#c9933a' : '#252525' }}>{s.time}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    label: 'Garage Profile',
    ui: () => (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#1a1a1a', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: '#333' }} />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#f0f0f0', letterSpacing: '-0.01em' }}>Al-Noor Garage</p>
              <p style={{ fontSize: 10, color: '#c9933a' }}>✓ Warshah Verified</p>
            </div>
          </div>
          <p style={{ fontSize: 11, color: '#444' }}>Seef District · 2.4 km away</p>
        </div>
        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: '#111', borderRadius: 8, marginBottom: 14 }}>
          <span style={{ fontSize: 22, fontWeight: 300, color: '#f0f0f0', letterSpacing: '-0.02em' }}>4.9</span>
          <div>
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, j) => <svg key={j} width="8" height="8" viewBox="0 0 24 24" fill="#c9933a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
            </div>
            <p style={{ fontSize: 9, color: '#444', marginTop: 2 }}>284 reviews</p>
          </div>
        </div>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 14 }}>
          {['Toyota', 'BMW', 'Audi', 'Honda', 'Nissan'].map((t, j) => (
            <span key={j} style={{ fontSize: 9, padding: '3px 7px', borderRadius: 4, background: '#141414', color: '#484848', border: '1px solid #1e1e1e' }}>{t}</span>
          ))}
        </div>
        {/* Checks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {['Certified technicians', 'Transparent pricing', 'Pickup & return', 'Digital invoice'].map((c, j) => (
            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#c9933a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p style={{ fontSize: 11, color: '#555', fontWeight: 300 }}>{c}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <div style={{ background: '#c9933a', borderRadius: 8, padding: '9px', textAlign: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: '#000' }}>Book this garage</p>
          </div>
        </div>
      </div>
    )
  },
]

function Phone({ screen, offset = 0, active = false }) {
  return (
    <div style={{
      transform: `translateY(${offset}px)`,
      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
      flexShrink: 0,
    }}>
      <div style={{
        width: 216,
        background: '#0a0a0a',
        borderRadius: 30,
        border: `1.5px solid ${active ? '#2a2a2a' : '#1e1e1e'}`,
        padding: '20px 16px 16px',
        boxShadow: active
          ? '0 48px 96px rgba(0,0,0,0.7), 0 0 0 1px #1e1e1e, inset 0 1px 0 rgba(255,255,255,0.03)'
          : '0 24px 48px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 420,
        position: 'relative',
      }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontSize: 9, fontWeight: 500, color: '#666' }}>9:41</span>
          <div style={{ width: 48, height: 5, background: '#1e1e1e', borderRadius: 3 }} />
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ width: 10, height: 6, background: '#333', borderRadius: 1 }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#333' }} />
          </div>
        </div>
        {/* Content */}
        <screen.ui />
        {/* Bottom indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
          <div style={{ width: 40, height: 3, background: '#222', borderRadius: 2 }} />
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: 10, color: '#2e2e2e', marginTop: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {screen.label}
      </p>
    </div>
  )
}

export default function AppPreview() {
  const [headRef, headIn] = useInView()
  const [phonesRef, phonesIn] = useInView({ threshold: 0.1 })
  const [activeIdx, setActiveIdx] = useState(1)

  return (
    <section style={{ padding: '130px 32px', background: '#060606', borderTop: '1px solid #141414', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div ref={headRef} className={`reveal${headIn ? ' visible' : ''}`}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 72 }}>
          <div>
            <span className="accent-line" />
            <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f0f0f0', maxWidth: 440 }}>
              The app that<br />handles it all.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { label: 'App Store', icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.34.05-2.37-1.32-3.21-2.54C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' },
              { label: 'Google Play', icon: 'M3.18 23.76c.35.2.74.24 1.12.14l11.9-6.87-2.52-2.52-10.5 9.25zm14.54-8.4L5.08 8.5 3.18.24C2.8.14 2.41.18 2.06.38L14.2 12.52l3.52 2.84zm2.1-5.76L16.6 7.9l-2.4 2.4L16.6 12.7l3.22-1.86c.92-.53.92-1.72 0-2.24zM4.3.1C3.92 0 3.53.04 3.18.24L14.2 11.3l2.4-2.4L4.3.1z' },
            ].map((store, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#0e0e0e', border: '1px solid #1e1e1e', borderRadius: 10, padding: '10px 16px', cursor: 'default' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#888"><path d={store.icon}/></svg>
                <div>
                  <p style={{ fontSize: 8, color: '#444', letterSpacing: '0.06em' }}>COMING SOON</p>
                  <p style={{ fontSize: 12, color: '#d0d0d0', fontWeight: 500 }}>{store.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phones */}
        <div ref={phonesRef}
          style={{
            display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'flex-start',
            opacity: phonesIn ? 1 : 0,
            transform: phonesIn ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
          id="phones-row">
          {screens.map((s, i) => (
            <div key={i} onClick={() => setActiveIdx(i)} style={{ cursor: 'pointer' }}>
              <Phone
                screen={s}
                offset={i === 1 ? -28 : 0}
                active={i === activeIdx}
              />
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 11, color: '#2a2a2a', marginTop: 32, letterSpacing: '0.05em' }}>
          Tap a screen to focus
        </p>
      </div>

      <style>{`
        @media(max-width:768px){
          #phones-row{
            overflow-x:auto; justify-content:flex-start !important;
            padding:0 0 20px; gap:14px !important;
            -webkit-overflow-scrolling:touch;
            scroll-snap-type:x mandatory;
          }
          #phones-row > div{ scroll-snap-align:center; }
        }
      `}</style>
    </section>
  )
}
