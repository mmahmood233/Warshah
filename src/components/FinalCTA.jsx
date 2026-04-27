import { useState } from 'react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="waitlist" style={{
      padding: '140px 32px',
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #1a1a1a',
    }}>
      {/* Background — last garage frame as texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/frames/garage/frame_0121.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.04,
        pointerEvents: 'none',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, #0a0a0a 80%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 580,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}>
        <p style={{
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#c9933a',
          fontWeight: 500,
          marginBottom: 28,
        }}>
          Join the waitlist
        </p>

        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 300,
          letterSpacing: '-0.025em',
          lineHeight: 1.08,
          color: '#f0f0f0',
          marginBottom: 20,
        }}>
          Ready to stop wasting time at the garage?
        </h2>

        <p style={{
          fontSize: 17,
          color: '#555',
          fontWeight: 300,
          lineHeight: 1.65,
          marginBottom: 52,
        }}>
          Join car owners in Bahrain who&apos;ve already signed up.
          Be first to access Warshah when we launch.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: 10,
            maxWidth: 440,
            margin: '0 auto 20px',
          }} className="cta-form">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1,
                background: '#111',
                border: '1px solid #2a2a2a',
                borderRadius: 10,
                padding: '14px 18px',
                fontSize: 15,
                color: '#f0f0f0',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#c9933a'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
            <button
              type="submit"
              style={{
                background: '#c9933a',
                color: '#000',
                border: 'none',
                borderRadius: 10,
                padding: '14px 24px',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Get Early Access
            </button>
          </form>
        ) : (
          <div style={{
            maxWidth: 440,
            margin: '0 auto 20px',
            padding: '20px',
            background: '#111',
            border: '1px solid #2a2a2a',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#c9933a" strokeWidth="1.5"/>
              <path d="M8 12l3 3 5-5" stroke="#c9933a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 14, color: '#c9933a', fontWeight: 400 }}>
              You&apos;re on the list. We&apos;ll reach out before launch.
            </p>
          </div>
        )}

        <p style={{
          fontSize: 12,
          color: '#333',
          fontWeight: 300,
          letterSpacing: '0.02em',
        }}>
          No commitment. No spam. Launching in Bahrain.
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .cta-form {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}
