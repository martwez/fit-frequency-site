import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#offerings', label: 'Offerings' },
  { href: '#rhythm', label: 'Weekly Rhythm' },
  { href: '#connect', label: 'Connect' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f5]/90 backdrop-blur-sm border-b border-[#f0ded2]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-[#4a4038]">
          <img src="/images/logo-icon.png" alt="Fit Frequency Wellness" className="h-10 w-10 object-contain" />
          <span className="font-serif text-xl tracking-wide">Fit Frequency Wellness</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-[#6b5d4f]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#c1725a] transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/fitfrequency.wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#c1725a] text-white hover:bg-[#8f5a44] transition-colors"
          >
            DM to Reserve
          </a>
        </nav>

        <button
          className="md:hidden text-[#6b5d4f]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-[#6b5d4f]">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/fitfrequency.wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#c1725a] text-white text-center"
          >
            DM to Reserve
          </a>
        </div>
      )}
    </header>
  )
}
