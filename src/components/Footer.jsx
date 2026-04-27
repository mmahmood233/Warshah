import { useInView } from '../hooks/useInView'

const footerLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Services',     href: '#services' },
  { label: 'Garages',      href: '#garages' },
  { label: 'For Garages',  href: '#' },
  { label: 'Privacy',      href: '#' },
  { label: 'Terms',        href: '#' },
]

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <footer style={{ background: '#060606', borderTop: '1px solid #111', padding: '64px 32px 40px' }}>
      <div ref={ref} style={{
        maxWidth: 1100, margin: '0 auto',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 40, alignItems: 'start', marginBottom: 56, paddingBottom: 48, borderBottom: '1px solid #111' }} id="footer-top">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Warshah" style={{ height: 30, borderRadius: 5, marginBottom: 14, display: 'block' }} />
            <p style={{ fontSize: 13, color: '#2e2e2e', fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.02em' }}>
              Your car, handled.
            </p>
            <p style={{ fontSize: 12, color: '#252525', marginTop: 20, lineHeight: 1.6, fontWeight: 300, maxWidth: 220 }}>
              Bahrain&apos;s first end-to-end car service platform. Book, collect, service, deliver.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            {footerLinks.map((l, i) => (
              <a key={i} href={l.href} style={{
                fontSize: 13, color: '#333', textDecoration: 'none', fontWeight: 300,
                transition: 'color 0.2s', letterSpacing: '0.01em', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#666'}
                onMouseLeave={e => e.currentTarget.style.color = '#333'}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 20 }}>
            {/* Social */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: 'Instagram', path: 'M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm-5 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              ].map((s, i) => (
                <a key={i} href="#" aria-label={s.label} style={{
                  width: 34, height: 34, borderRadius: 8, border: '1px solid #161616',
                  background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.2s', textDecoration: 'none',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#333'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#161616'}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Language */}
            <div style={{ display: 'flex', overflow: 'hidden', border: '1px solid #161616', borderRadius: 8 }}>
              <button style={{ background: '#141414', border: 'none', padding: '7px 14px', fontSize: 11, color: '#c0c0c0', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.08em' }}>EN</button>
              <button style={{ background: 'transparent', border: 'none', borderLeft: '1px solid #161616', padding: '7px 14px', fontSize: 11, color: '#333', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.08em' }}>عر</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: 11, color: '#252525', fontWeight: 300 }}>© 2025 Warshah. All rights reserved.</p>
          <p style={{ fontSize: 11, color: '#252525', fontWeight: 300 }}>Made in Bahrain 🇧🇭</p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #footer-top{ grid-template-columns:1fr !important; text-align:center; }
          #footer-top > div:last-child{ align-items:center !important; }
          #footer-top > div:nth-child(2){ align-items:center !important; }
        }
      `}</style>
    </footer>
  )
}
