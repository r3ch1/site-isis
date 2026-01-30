'use client'

import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="snap-section min-h-0 py-8 bg-primary text-white">
      <div className="container text-center">
        <p className="text-white/80 text-sm">
          © {new Date().getFullYear()} {siteConfig.fullTitle}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
