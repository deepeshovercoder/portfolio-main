import type { CSSProperties } from 'react'

type Role = {
  company: string
  role: string
  location: string
  dates: string
  lead: string
  metrics: string[]
  bullets: string[]
}

const ROLES: Role[] = [
  {
    company: 'InstaSpaces',
    role: 'Software Development Engineer-1',
    location: 'Gurugram',
    dates: 'Jul 2024 — Present',
    lead: 'Built the Java Spring Boot backend powering bookings, payments, invoicing, and dashboards for 30K+ monthly users.',
    metrics: ['30K+ monthly users', '~30% latency reduction', '2hr → 2min onboarding'],
    bullets: [
      'Developed and maintained Java Spring Boot backend services powering booking, payments, invoicing, and user dashboards for 30K+ monthly users.',
      'Designed relational data models, JPA entities, and optimized SQL queries & indexes, reducing high-traffic API latency by ~30%.',
      'Implemented an idempotent payment webhook system with transactional guarantees to prevent double-bookings and duplicate payments.',
      'Engineered a venue onboarding automation pipeline (Google Sheets → Backend), cutting manual onboarding from 2 hours to 2 minutes.',
    ],
  },
  {
    company: 'RB Corporation Holdings',
    role: 'Full-Stack Developer',
    location: 'Gurugram',
    dates: 'Feb 2024 — Apr 2024',
    lead: 'Built backend modules and contributed across the API lifecycle for production applications.',
    metrics: ['Agile delivery', 'API dev & testing', 'Production deployments'],
    bullets: [
      'Developed backend modules using Java and Spring Boot following Agile development practices.',
      'Contributed to API development, testing, debugging, and deployment activities for production applications.',
      'Participated in code reviews and collaborated with team members to improve application quality and maintainability.',
    ],
  },
]

// Circuit-trace rail: vertical runs joined by short diagonal jogs. Each role's
// node sits on the segment that runs past its height — RAIL_X is that segment's
// x (in the 0–32 viewBox) per node, so the dot can be nudged onto the line.
const RAIL_PATH = 'M16,0 L16,220 L10,260 L10,1000'
const RAIL_X = [16, 10]
const VIEWBOX_W = 32
const RAIL_PX = 40 // .exp-rail width — viewBox x maps to px at RAIL_PX / VIEWBOX_W

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1180px] border-t border-rule px-6 py-32 md:px-12 md:py-26"
    >
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        § 2 — Experience
      </p>
      <h2
        className="mb-16 font-serif font-light leading-[0.95] tracking-[-0.03em]"
        style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
      >
        Where I&apos;ve <span className="italic text-accent">shipped.</span>
      </h2>

      <div className="exp">
        <div className="exp-rail hidden md:block" aria-hidden>
          <svg
            className="exp-svg"
            viewBox="0 0 32 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              className="rail-base"
              d={RAIL_PATH}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="rail-coral"
              d={RAIL_PATH}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray={1}
            />
          </svg>
        </div>

        <div className="exp-rows grid grid-cols-1 md:grid-cols-[160px_1fr]">
          {ROLES.map((r, i) => (
            <div key={r.company} className="contents">
              <div
                className={`exp-node hidden md:flex md:items-start md:gap-3 md:pl-[15px] ${
                  i === 0 ? 'pt-0' : 'pt-12'
                }`}
                style={
                  {
                    '--at': (i / ROLES.length).toFixed(3),
                    '--dot-shift': `${(((RAIL_X[i] ?? 16) - 16) * RAIL_PX) / VIEWBOX_W}px`,
                  } as CSSProperties
                }
                aria-hidden
              >
                <span className="exp-dot mt-[6px] h-2.5 w-2.5 shrink-0 rounded-full border" />
                <span className="exp-num font-mono text-[11px] tracking-[0.1em]">
                  0{i + 1}
                </span>
              </div>

              <article
                className={`group border-t border-rule py-12 transition-all duration-500 ${
                  i === 0 ? 'border-t-0 pt-0' : ''
                }`}
              >
                <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-[40px] font-normal leading-none tracking-[-0.02em] md:text-[48px]">
                    <span className="italic text-accent">{r.company}</span>
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {r.dates}
                  </p>
                </header>

                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {r.role} · {r.location}
                </p>

                <p className="mb-4 max-w-[42ch] text-[18px] leading-[1.45] text-ink/90 md:text-[20px]">
                  {r.lead}
                </p>

                <p className="exp-metrics mb-6 font-mono text-[11px] tracking-[0.06em] text-muted">
                  {r.metrics.join('  ·  ')}
                </p>

                <details className="exp-details" open={i === 0}>
                  <summary className="exp-summary inline-flex cursor-pointer select-none items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    <span className="exp-summary-show">View details</span>
                    <span className="exp-summary-hide">Hide details</span>
                    <span className="exp-summary-mark" aria-hidden>
                      ↓
                    </span>
                  </summary>
                  <ul className="mt-6 space-y-4">
                    {r.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="exp-bullet grid grid-cols-[16px_1fr] gap-3 text-[15px] leading-[1.55] text-ink/70 md:text-[16px]"
                      >
                        <span className="pt-[6px] font-mono text-[10px] text-muted">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}