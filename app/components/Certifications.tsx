'use client'

import { useRef, useState, useEffect } from 'react'

type Cert = {
  title: string
  issuer: string
  date: string
  credentialId: string
  url: string
}

const CERTS: Cert[] = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Jul 2026',
    credentialId: 'xmjs8ecpw654',
    url: 'https://verify.skilljar.com/c/xmjs8ecpw654',
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: 'Jul 2026',
    credentialId: '39cezi9wc2nc',
    url: 'https://verify.skilljar.com/c/39cezi9wc2nc',
  },
  {
    title: 'Problem Solving Certificate',
    issuer: 'Hackerrank',
    date: 'June 2024',
    credentialId: '139a45badd94',
    url: 'https://www.hackerrank.com/certificates/iframe/139a45badd94',
  },
  {
    title: 'SQL (Intermediate) Certificate',
    issuer: 'Hackerrank',
    date: 'Feb 2024',
    credentialId: 'e7b814613833',
    url: 'https://www.hackerrank.com/certificates/iframe/e7b814613833',
  },
]

export default function Certifications() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.cert-star') as HTMLElement | null
    const step = card ? card.offsetWidth + 32 : 320
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section
      id="certifications"
      className="mx-auto max-w-[1180px] border-t border-rule px-6 py-32 md:px-12 md:py-26"
    >
      <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            § 4 — Certifications
          </p>
          <h2
            className="font-serif font-light leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
          >
            What I&apos;ve <span className="italic text-accent">earned.</span>
          </h2>
        </div>

        {/* arrow controls */}
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label="Scroll certificates left"
            onClick={() => scrollByCard(-1)}
            disabled={!canLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink transition-colors duration-300 hover:border-ink/40 disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll certificates right"
            onClick={() => scrollByCard(1)}
            disabled={!canRight}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink transition-colors duration-300 hover:border-ink/40 disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      <div className="cert-field">
        {/* the horizontal rail — purely decorative, drawn by CSS on scroll */}
        <div className="cert-rail hidden md:block" aria-hidden>
          <span className="cert-rail-base" />
          <span className="cert-rail-coral" />
        </div>

        <ul ref={trackRef} className="cert-stars cert-scroll">
          {CERTS.map((c, i) => (
            <li
              key={c.credentialId}
              className="cert-star"
              style={{ ['--i' as string]: i } as React.CSSProperties}
            >
              {/* the node that sits on the rail — ignites in sequence on scroll */}
              <span className="cert-node hidden md:flex" aria-hidden>
                <span className="cert-dot" />
              </span>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card group block"
              >
                <p className="cert-issuer font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-accent">
                  {c.issuer}
                </p>
                <h3 className="cert-title mt-2 font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent md:text-[28px]">
                  {c.title}
                </h3>
                <p className="cert-meta mt-4 font-mono text-[11px] tracking-[0.06em] text-muted">
                  Issued {c.date}
                  <span className="cert-sep"> · </span>
                  <span className="cert-id">ID {c.credentialId}</span>
                </p>
                <span className="cert-verify mt-6 inline-flex items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-accent">
                  Verify
                  <span aria-hidden className="cert-arrow transition-transform duration-300">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}