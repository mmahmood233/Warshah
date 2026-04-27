const screens = [
  {
    label: 'Browse & Book',
    lines: [
      { type: 'header', text: 'Services near you' },
      { type: 'sub', text: 'Manama, Bahrain' },
      { type: 'divider' },
      { type: 'card', title: 'Oil Change', meta: 'From 12 BD · 2 garages nearby', accent: true },
      { type: 'card', title: 'Tyre Service', meta: 'From 18 BD · 4 garages nearby', accent: false },
      { type: 'card', title: 'AC Service', meta: 'From 25 BD · 3 garages nearby', accent: false },
      { type: 'divider' },
      { type: 'cta', text: 'Add pickup & return' },
    ],
  },
  {
    label: 'Live Tracking',
    lines: [
      { type: 'header', text: 'Your Toyota Camry' },
      { type: 'sub', text: 'Service in progress' },
      { type: 'divider' },
      { type: 'status', step: 'Picked up', done: true },
      { type: 'status', step: 'At Al-Noor Garage', done: true },
      { type: 'status', step: 'Service in progress', done: false, active: true },
      { type: 'status', step: 'On the way back', done: false },
      { type: 'status', step: 'Delivered', done: false },
    ],
  },
  {
    label: 'Garage Profile',
    lines: [
      { type: 'header', text: 'Al-Noor Garage' },
      { type: 'sub', text: 'Seef District · Verified partner' },
      { type: 'divider' },
      { type: 'rating', value: '4.9', count: '284 reviews' },
      { type: 'tag', items: ['Toyota', 'BMW', 'Audi', 'Honda'] },
      { type: 'divider' },
      { type: 'check', text: 'Certified technicians' },
      { type: 'check', text: 'Transparent pricing' },
      { type: 'check', text: 'Pickup available' },
    ],
  },
]

function PhoneScreen({ screen }) {
  return (
    <div style={{
      background: '#0e0e0e',
      borderRadius: 28,
      border: '1.5px solid #2a2a2a',
      padding: '28px 20px 24px',
      minWidth: 220,
      width: 220,
      flexShrink: 0,
      boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px #1e1e1e',
      position: 'relative',
    }}>
      {/* Notch */}
      <div style={{
        width: 60,
        height: 6,
        background: '#1e1e1e',
        borderRadius: 3,
        margin: '0 auto 20px',
      }} />

      {screen.lines.map((line, i) => {
        if (line.type === 'header') return (
          <p key={i} style={{ fontSize: 15, fontWeight: 500, color: '#f0f0f0', marginBottom: 4, letterSpacing: '-0.01em' }}>
            {line.text}
          </p>
        )
        if (line.type === 'sub') return (
          <p key={i} style={{ fontSize: 11, color: '#555', marginBottom: 0, letterSpacing: '0.02em' }}>
            {line.text}
          </p>
        )
        if (line.type === 'divider') return (
          <div key={i} style={{ height: 1, background: '#1a1a1a', margin: '14px 0' }} />
        )
        if (line.type === 'card') return (
          <div key={i} style={{
            background: line.accent ? '#1a1400' : '#111',
            border: `1px solid ${line.accent ? '#3a2c00' : '#1e1e1e'}`,
            borderRadius: 8,
            padding: '10px 12px',
            marginBottom: 8,
          }}>
            <p style={{ fontSize: 12, fontWeight: 500, color: '#e0e0e0', marginBottom: 3 }}>{line.title}</p>
            <p style={{ fontSize: 10, color: '#555' }}>{line.meta}</p>
          </div>
        )
        if (line.type === 'status') return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: line.done ? '#c9933a' : line.active ? '#c9933a' : '#222',
              border: line.active ? '2px solid #c9933a' : 'none',
              boxShadow: line.active ? '0 0 8px rgba(201,147,58,0.5)' : 'none',
              flexShrink: 0,
            }} />
            <p style={{
              fontSize: 11,
              color: line.done ? '#888' : line.active ? '#f0f0f0' : '#333',
              fontWeight: line.active ? 500 : 300,
            }}>
              {line.step}
            </p>
          </div>
        )
        if (line.type === 'rating') return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 22, fontWeight: 300, color: '#f0f0f0', letterSpacing: '-0.02em' }}>{line.value}</span>
            <div>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="9" height="9" viewBox="0 0 24 24" fill="#c9933a">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 9, color: '#444', marginTop: 2 }}>{line.count}</p>
            </div>
          </div>
        )
        if (line.type === 'tag') return (
          <div key={i} style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
            {line.items.map((tag, j) => (
              <span key={j} style={{
                fontSize: 9,
                padding: '3px 8px',
                borderRadius: 4,
                background: '#1a1a1a',
                color: '#555',
                border: '1px solid #222',
              }}>
                {tag}
              </span>
            ))}
          </div>
        )
        if (line.type === 'check') return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#c9933a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 11, color: '#666', fontWeight: 300 }}>{line.text}</p>
          </div>
        )
        if (line.type === 'cta') return (
          <div key={i} style={{
            background: '#c9933a',
            borderRadius: 8,
            padding: '10px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: '#000' }}>{line.text}</p>
          </div>
        )
        return null
      })}

      {/* Screen label */}
      <p style={{
        textAlign: 'center',
        fontSize: 10,
        color: '#333',
        marginTop: 20,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {screen.label}
      </p>
    </div>
  )
}

export default function AppPreview() {
  return (
    <section style={{ padding: '120px 32px', background: '#080808', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={eyebrowStyle}>The App</p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 72,
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 300,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: '#f0f0f0',
            maxWidth: 440,
          }}>
            The app that<br />handles it all.
          </h2>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={storeBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f0f0f0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.34.05-2.37-1.32-3.21-2.54C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <p style={{ fontSize: 8, color: '#666', letterSpacing: '0.05em' }}>COMING SOON ON</p>
                <p style={{ fontSize: 13, color: '#f0f0f0', fontWeight: 500 }}>App Store</p>
              </div>
            </div>
            <div style={storeBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f0f0f0">
                <path d="M3.18 23.76c.35.2.74.24 1.12.14l11.9-6.87-2.52-2.52-10.5 9.25zm14.54-8.4L5.08 8.5 3.18.24C2.8.14 2.41.18 2.06.38L14.2 12.52l3.52 2.84zm2.1-5.76L16.6 7.9l-2.4 2.4L16.6 12.7l3.22-1.86c.92-.53.92-1.72 0-2.24zM4.3.1C3.92 0 3.53.04 3.18.24L14.2 11.3l2.4-2.4L4.3.1z"/>
              </svg>
              <div>
                <p style={{ fontSize: 8, color: '#666', letterSpacing: '0.05em' }}>COMING SOON ON</p>
                <p style={{ fontSize: 13, color: '#f0f0f0', fontWeight: 500 }}>Google Play</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screens */}
        <div style={{
          display: 'flex',
          gap: 24,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }} className="screens-row">
          {screens.map((s, i) => (
            <div key={i} style={{
              transform: i === 1 ? 'translateY(-24px)' : 'none',
              transition: 'transform 0.3s',
            }}>
              <PhoneScreen screen={s} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .screens-row {
            overflow-x: auto;
            justify-content: flex-start !important;
            padding-bottom: 16px;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          .screens-row > div {
            scroll-snap-align: start;
            transform: none !important;
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

const storeBadge = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  background: '#111',
  border: '1px solid #222',
  borderRadius: 10,
  padding: '10px 16px',
  cursor: 'default',
}
