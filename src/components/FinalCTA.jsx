import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.2 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="waitlist" style={{
      padding: '160px 32px',
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #141414',
    }}>
      {/* Ghost frame texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/frames/garage/frame_0121.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.035, pointerEvents: 'none',
        filter: 'grayscale(1)',
      }} />
      {/* Radial fade */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #0a0a0a 75%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{
        maxWidth: 560, margin: '0 auto', textAlign: 'center', position: 'relative',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <span className="accent-line" style={{ display: 'block', margin: '0 auto 28px' }} />

        <h2 style={{
          fontSize: 'clamp(36px,5.5vw,64px)', fontWeight: 300,
          letterSpacing: '-0.03em', lineHeight: 1.05,
          color: '#f0f0f0', marginBottom: 22,
        }}>
          Ready to stop wasting<br />time at the garage?
        </h2>

        <p style={{ fontSize: 16, color: '#484848', fontWeight: 300, lineHeight: 1.65, marginBottom: 56 }}>
          Join car owners across Bahrain who&apos;ve already signed up.
          Be first to access Warshah when we launch.
        </p>

        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto 16px' }} id="cta-form">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                style={{
                  flex: 1, background: '#0e0e0e', border: '1px solid #242424',
                  borderRadius: 10, padding: '14px 18px', fontSize: 14, color: '#f0f0f0',
                  outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.25s',
                }}
                onFocus={e => e.target.style.borderColor = '#c9933a'}
                onBlur={e => e.target.style.borderColor = '#242424'}
              />
              <button type="submit" style={{
                background: '#c9933a', color: '#000', border: 'none',
                borderRadius: 10, padding: '14px 22px', fontSize: 14, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.01em',
                whiteSpace: 'nowrap', transition: 'opacity 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
                Get Early Access
              </button>
            </form>
            <p style={{ fontSize: 12, color: '#2e2e2e', fontWeight: 300, letterSpacing: '0.02em' }}>
              No commitment · No spam · Launching in Bahrain
            </p>
          </>
        ) : (
          <div style={{
            padding: '20px 28px', background: '#0d1a0a', border: '1px solid #1a3a14',
            borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 12, maxWidth: 440, margin: '0 auto',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#4caf50" strokeWidth="1.5"/>
              <path d="M8 12l3 3 5-5" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: 14, color: '#6ab06a', fontWeight: 400 }}>
              You&apos;re on the list — we&apos;ll reach out before launch.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media(max-width:480px){ #cta-form{ flex-direction:column !important; } }
        .accent-line[style*="margin: 0 auto"] { margin-left: auto; margin-right: auto; }
      `}</style>
    </section>
  )
}
