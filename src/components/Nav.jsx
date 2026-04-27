import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(14,14,14,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 32px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/logo.png"
            alt="Warshah"
            style={{
              height: 36,
              width: 'auto',
              borderRadius: 6,
              display: 'block',
            }}
          />
        </a>

        {/* Nav links — hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }} className="nav-links">
          <a href="#how-it-works" style={linkStyle}>How it works</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#garages" style={linkStyle}>Garages</a>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          style={{
            background: '#c9933a',
            color: '#000',
            padding: '10px 22px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Get Early Access
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

const linkStyle = {
  color: '#a0a0a0',
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: '0.01em',
  transition: 'color 0.2s',
}
