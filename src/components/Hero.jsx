import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 121
const FPS = 30
const FRAME_DURATION = 1000 / FPS

const frameUrl = (n) =>
  `/frames/garage/frame_${String(n).padStart(4, '0')}.jpg`

export default function Hero() {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const frameRef = useRef(0)
  const lastTimeRef = useRef(null)
  const rafRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [animDone, setAnimDone] = useState(false)

  useEffect(() => {
    const images = []
    let loadedCount = 0

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = frameUrl(i)
      img.onload = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images
          setLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images
          setLoaded(true)
        }
      }
      images.push(img)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const drawFrame = (index) => {
      const img = imagesRef.current[index]
      if (!img || !img.naturalWidth) return
      const cw = canvas.width
      const ch = canvas.height
      const iw = img.naturalWidth
      const ih = img.naturalHeight
      const scale = Math.max(cw / iw, ch / ih)
      const dw = iw * scale
      const dh = ih * scale
      const dx = (cw - dw) / 2
      const dy = (ch - dh) / 2
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, dw, dh)
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

        // Trigger text fade after 60% of animation
        if (frameRef.current >= Math.floor(TOTAL_FRAMES * 0.6)) {
          setTextVisible(true)
        }

        if (frameRef.current < TOTAL_FRAMES - 1) {
          frameRef.current++
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setAnimDone(true)
          setTextVisible(true)
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

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#0e0e0e' }}>
      {/* Frame canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Loading state */}
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 40,
            height: 2,
            background: '#333',
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '40%',
              background: '#c9933a',
              borderRadius: 2,
              animation: 'slide 1s ease-in-out infinite',
            }} />
          </div>
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              50% { transform: translateX(150%); }
              100% { transform: translateX(0); }
            }
          `}</style>
        </div>
      )}

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(14,14,14,0.85) 0%, rgba(14,14,14,0.3) 50%, rgba(14,14,14,0.2) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(14,14,14,0.4) 0%, transparent 50%, rgba(14,14,14,0.4) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '10vh',
        textAlign: 'center',
        padding: '0 24px 10vh',
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }}>
        <p style={{
          fontSize: 12,
          letterSpacing: '0.2em',
          color: '#c9933a',
          fontWeight: 500,
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          Launching in Bahrain
        </p>

        <h1 style={{
          fontSize: 'clamp(52px, 8vw, 96px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#f5f5f5',
          marginBottom: 24,
          maxWidth: 800,
        }}>
          Your car,<br />handled.
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          fontWeight: 300,
          lineHeight: 1.6,
          color: '#b0b0b0',
          maxWidth: 520,
          marginBottom: 40,
          letterSpacing: '0.01em',
        }}>
          Book any car service in Bahrain. We pick it up,
          get it done, and bring it back.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#waitlist"
            style={{
              background: '#c9933a',
              color: '#000',
              padding: '14px 32px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Get Early Access
          </a>
          <a
            href="#how-it-works"
            style={{
              background: 'transparent',
              color: '#f0f0f0',
              padding: '14px 32px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 400,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              letterSpacing: '0.01em',
              transition: 'border-color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
          >
            How it works ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {animDone && (
        <div style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0.4,
          animation: 'bounce 2s ease-in-out infinite',
        }}>
          <div style={{ width: 1, height: 40, background: '#f0f0f0' }} />
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(6px); }
            }
          `}</style>
        </div>
      )}
    </section>
  )
}
