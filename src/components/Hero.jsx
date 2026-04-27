import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 121
const FPS = 30
const FRAME_DURATION = 1000 / FPS
const frameUrl = (n) => `/frames/garage/frame_${String(n).padStart(4, '0')}.jpg`

export default function Hero() {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const frameRef = useRef(0)
  const lastTimeRef = useRef(null)
  const rafRef = useRef(null)
  const [loadProgress, setLoadProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [textStep, setTextStep] = useState(0)
  const [animDone, setAnimDone] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Preload frames
  useEffect(() => {
    const images = []
    let loadedCount = 0

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = frameUrl(i)
      const onDone = () => {
        loadedCount++
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100))
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images
          // Brief hold so the spinner doesn't flash away
          setTimeout(() => {
            setLoaded(true)
            // Fade out loader then remove
            setTimeout(() => setLoaderVisible(false), 700)
          }, 400)
        }
      }
      img.onload = onDone
      img.onerror = onDone
      images.push(img)
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  // Canvas animation — starts after loader fades out
  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const drawFrame = (index) => {
      const img = imagesRef.current[index]
      if (!img?.naturalWidth) return
      const { width: cw, height: ch } = canvas
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(frameRef.current)
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const delta = timestamp - lastTimeRef.current
      if (delta >= FRAME_DURATION) {
        lastTimeRef.current = timestamp
        drawFrame(frameRef.current)

        const pct = frameRef.current / (TOTAL_FRAMES - 1)
        if (pct >= 0.45 && textStep < 1) setTextStep(1)
        if (pct >= 0.60 && textStep < 2) setTextStep(2)
        if (pct >= 0.75 && textStep < 3) setTextStep(3)
        if (pct >= 0.90 && textStep < 4) setTextStep(4)

        if (frameRef.current < TOTAL_FRAMES - 1) {
          frameRef.current++
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setTextStep(4)
          setAnimDone(true)
        }
      } else {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [loaded])

  const parallaxOffset = scrollY * 0.25

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#060606' }}>

      {/* ── Spinning logo loader ── */}
      {loaderVisible && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: '#060606',
          opacity: loaded ? 0 : 1,
          transition: 'opacity 0.7s ease',
          pointerEvents: loaded ? 'none' : 'all',
        }}>
          {/* Spinning logo video */}
          <div style={{ position: 'relative', width: 180, height: 180, marginBottom: 36 }}>
            <video
              src="/warshalogospinning.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Progress bar */}
          <div style={{ width: 120, height: 1, background: '#1a1a1a', borderRadius: 1, overflow: 'hidden', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, height: '100%',
              width: `${loadProgress}%`,
              background: 'linear-gradient(to right, #a06828, #c9933a)',
              borderRadius: 1,
              transition: 'width 0.12s linear',
            }} />
          </div>
          <p style={{ fontSize: 10, color: '#2e2e2e', marginTop: 12, letterSpacing: '0.18em', fontWeight: 400 }}>
            {loadProgress}%
          </p>
        </div>
      )}

      {/* ── Canvas ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.9s ease',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.25) 55%, rgba(6,6,6,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(6,6,6,0.35) 0%, transparent 40%, transparent 60%, rgba(6,6,6,0.35) 100%)',
      }} />

      {/* ── Hero text ── */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        padding: '0 24px 9vh', textAlign: 'center',
        transform: `translateY(${-parallaxOffset * 0.4}px)`,
      }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.22em', color: '#c9933a', fontWeight: 500,
          textTransform: 'uppercase', marginBottom: 18,
          opacity: textStep >= 1 ? 1 : 0,
          transform: textStep >= 1 ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          Launching in Bahrain
        </p>

        <h1 style={{
          fontSize: 'clamp(56px, 9vw, 108px)',
          fontWeight: 300, lineHeight: 0.98, letterSpacing: '-0.04em',
          color: '#f5f5f5', marginBottom: 28,
          opacity: textStep >= 2 ? 1 : 0,
          transform: textStep >= 2 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Your car,<br />
          <em style={{ fontStyle: 'normal', color: '#c9933a' }}>handled.</em>
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 19px)', fontWeight: 300, lineHeight: 1.65,
          color: '#888', maxWidth: 480, marginBottom: 44, letterSpacing: '0.01em',
          opacity: textStep >= 3 ? 1 : 0,
          transform: textStep >= 3 ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
        }}>
          Book any car service in Bahrain. We pick it up,
          get it done, and bring it back.
        </p>

        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
          opacity: textStep >= 4 ? 1 : 0,
          transform: textStep >= 4 ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
        }}>
          <a href="#waitlist" style={primaryBtn}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Get Early Access
          </a>
          <a href="#how-it-works" style={ghostBtn}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
            How it works ↓
          </a>
        </div>
      </div>

      {/* Scroll needle */}
      {animDone && (
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          animation: 'needleDrop 2.4s ease-in-out infinite',
        }}>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, transparent, rgba(201,147,58,0.5))' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#c9933a' }} />
          <style>{`@keyframes needleDrop {
            0%,100%{transform:translateX(-50%) translateY(0);opacity:.5}
            50%{transform:translateX(-50%) translateY(7px);opacity:1}
          }`}</style>
        </div>
      )}
    </section>
  )
}

const primaryBtn = {
  background: '#c9933a', color: '#000',
  padding: '14px 32px', borderRadius: 10,
  fontSize: 14, fontWeight: 500, textDecoration: 'none',
  letterSpacing: '0.02em', display: 'inline-block',
  transition: 'opacity 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
}
const ghostBtn = {
  background: 'transparent', color: '#d0d0d0',
  padding: '14px 32px', borderRadius: 10,
  fontSize: 14, fontWeight: 400, textDecoration: 'none',
  border: '1px solid rgba(255,255,255,0.12)',
  letterSpacing: '0.02em', display: 'inline-block',
  transition: 'border-color 0.2s',
}
