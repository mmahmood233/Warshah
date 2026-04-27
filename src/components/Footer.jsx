const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Garages', href: '#garages' },
  { label: 'For Garages', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid #141414',
      padding: '56px 32px 40px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 32,
          marginBottom: 48,
          paddingBottom: 40,
          borderBottom: '1px solid #141414',
        }} className="footer-top">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Warshah" style={{
              height: 32,
              width: 'auto',
              borderRadius: 5,
              marginBottom: 12,
              display: 'block',
            }} />
            <p style={{
              fontSize: 13,
              color: '#3a3a3a',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}>
              Your car, handled.
            </p>
          </div>

          {/* Nav */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
          }}>
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} style={{
                fontSize: 13,
                color: '#3a3a3a',
                textDecoration: 'none',
                fontWeight: 300,
                transition: 'color 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#888'}
              onMouseLeave={e => e.currentTarget.style.color = '#3a3a3a'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + language */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              {/* Instagram */}
              <a href="#" style={socialIcon} aria-label="Instagram"
                onMouseEnter={e => e.currentTarget.style.borderColor = '#444'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="#666" stroke="none"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" style={socialIcon} aria-label="LinkedIn"
                onMouseEnter={e => e.currentTarget.style.borderColor = '#444'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>

            {/* Language toggle */}
            <div style={{
              display: 'flex',
              gap: 0,
              border: '1px solid #1e1e1e',
              borderRadius: 8,
              overflow: 'hidden',
            }}>
              <button style={{
                background: '#141414',
                border: 'none',
                padding: '6px 14px',
                fontSize: 12,
                color: '#f0f0f0',
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.05em',
              }}>
                EN
              </button>
              <button style={{
                background: 'transparent',
                border: 'none',
                borderLeft: '1px solid #1e1e1e',
                padding: '6px 14px',
                fontSize: 12,
                color: '#444',
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.05em',
              }}>
                عر
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: 12, color: '#2e2e2e', fontWeight: 300 }}>
            © 2025 Warshah. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: '#2e2e2e', fontWeight: 300 }}>
            Made in Bahrain 🇧🇭
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-top > div:last-child {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

const socialIcon = {
  width: 36,
  height: 36,
  borderRadius: 8,
  border: '1px solid #1e1e1e',
  background: '#0e0e0e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'border-color 0.2s',
  cursor: 'pointer',
}
