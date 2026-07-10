export default function Footer() {
  const cols = [
    {
      label: 'Reach',
      items: [
        { text: 'deepeshovercoder@gmail.com', href: 'mailto:deepeshovercoder@gmail.com' },
        { text: '+91 99714 49567', href: 'tel:+919971449567' },
      ],
    },
    {
      label: 'Code',
      items: [
        { text: 'LeetCode', href: 'https://leetcode.com/deepeshovercoder' },
        { text: 'Resume', href: '/deepesh_resume.pdf', newTab: true },
      ],
    },
    {
      label: 'Social',
      items: [
        { text: 'GitHub', href: 'https://github.com/deepeshovercoder' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/deepesh-chourasia' },
      ],
    },
    {
      label: 'Location',
      items: [
        { text: 'Gurugram, India', href: '#' },
        { text: 'UTC+5:30', href: '#' },
      ],
    },
  ]

  return (
    <footer id="contact" className="mx-auto max-w-[1100px] border-t border-rule px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-36">
      <p
        className="mb-20 max-w-[900px] font-serif font-light italic leading-[1.15] tracking-[-0.02em]"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
      >
        I&apos;m drawn to the unglamorous infrastructure behind the product — the SQL indexes, the idempotent webhooks, the <span className="text-accent">queries that decide</span> whether the app feels fast.
      </p>

      <div className="grid grid-cols-2 gap-8 border-t border-rule pt-12 md:grid-cols-4">
        {cols.map((col) => (
          <div key={col.label}>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {col.label}
            </p>
            {col.items.map((item) => (
              <a
                key={item.text}
                href={item.href}
                target={item.href.startsWith('http') || item.newTab ? '_blank' : undefined}
                rel={item.href.startsWith('http') || item.newTab ? 'noopener noreferrer' : undefined}
                className="block py-1 text-[14px] text-ink transition-colors duration-200 hover:text-accent"
              >
                {item.text}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-between border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        <div>© Deepesh Chourasia · 2026</div>
        <div>Built solo</div>
      </div>
    </footer>
  )
}
