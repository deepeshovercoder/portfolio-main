export default function Bio() {
  return (
    <section id="about" className="mx-auto max-w-[720px] border-t border-rule px-6 py-32 md:px-12 md:py-36">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        § 1 — Introduction
      </p>

      <div className="font-serif text-[22px] leading-[1.65] text-ink">
        <p className="mb-6 first:first-letter:float-left first:first-letter:mr-3 first:first-letter:mt-2 first:first-letter:font-serif first:first-letter:text-[80px] first:first-letter:font-normal first:first-letter:italic first:first-letter:leading-[0.85] first:first-letter:text-accent">
          I&apos;m a software engineer at <em className="not-italic text-accent">InstaSpaces</em>, where I build the Java Spring Boot backend powering booking, payments, invoicing, and user dashboards for 30K+ monthly users — the kind of system where transactional correctness and query performance decide whether the product actually works under load. Earlier I built full-stack features as an intern at <em className="not-italic text-accent">RB Corporation Holdings</em>.
        </p>

        <p className="text-muted">
          On my own time I keep sharpening the fundamentals — I&apos;ve solved over 400 DSA problems on LeetCode and Hackerrank and qualified GATE CSE 2024. I like the unglamorous half of backend work: idempotent webhooks, SQL indexes that turn a <strong>2-second</strong> query into a <strong>200ms</strong> one, and pipelines that turn a manual 2-hour process into a 2-minute one.
        </p>
      </div>
    </section>
  )
}