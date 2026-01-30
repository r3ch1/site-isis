'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '../config/site'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="#" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white font-bold text-lg">
            {siteConfig.lawyerName.charAt(0)}
          </span>
          <span className="text-white font-semibold text-sm md:text-base max-w-[140px] md:max-w-none">
            {siteConfig.fullTitle}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 px-4 text-white/90 hover:text-white text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn py-3 px-6 text-sm bg-accent hover:bg-amber-600 rounded-lg min-h-[2.75rem]"
          >
            Agendar consulta
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-3 text-white rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 py-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 px-4 text-white/90 hover:text-white rounded-md hover:bg-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn py-3 px-5 mt-2 text-center bg-accent hover:bg-amber-600 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
