'use client'

import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="snap-section min-h-0 py-8 bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="container text-center">
        <p className="opacity-80 text-sm">
          © {new Date().getFullYear()} {siteConfig.fullTitle}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
