import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Services',     href: '#services',     id: 'services' },
  { label: 'Garages',      href: '#garages',      id: 'garages' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Active section detection
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(link.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Warshah" style={{ height: 34, width: 'auto', borderRadius: 6, display: 'block' }} />
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.id} href={link.href} style={{
                color: activeSection === link.id ? '#c9933a' : '#585858',
                textDecoration: 'none', fontSize: 13, fontWeight: 400,
                letterSpacing: '0.01em', transition: 'color 0.2s',
              }}
                onMouseEnter={e => { if (activeSection !== link.id) e.currentTarget.style.color = '#aaa' }}
                onMouseLeave={e => { if (activeSection !== link.id) e.currentTarget.style.color = '#585858' }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#waitlist" style={{
              background: '#c9933a', color: '#000',
              padding: '9px 20px', borderRadius: 8,
              fontSize: 13, fontWeight: 500, textDecoration: 'none',
              letterSpacing: '0.01em', transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Get Early Access
            </a>

            {/* Burger — mobile only */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
              className="burger" aria-label="Menu">
              <div style={{ width: 20, height: 1.5, background: '#888', marginBottom: 5, transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <div style={{ width: 20, height: 1.5, background: '#888', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <div style={{ width: 20, height: 1.5, background: '#888', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: 'rgba(10,10,10,0.97)', borderTop: '1px solid #1a1a1a', padding: '20px 32px 28px' }} className="mobile-menu">
            {navLinks.map(link => (
              <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '12px 0', fontSize: 16, color: '#888', textDecoration: 'none', borderBottom: '1px solid #141414', fontWeight: 300 }}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media(max-width:768px){
          .desktop-nav{ display:none !important; }
          .burger{ display:block !important; }
        }
      `}</style>
    </>
  )
}
