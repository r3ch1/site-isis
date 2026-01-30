'use client'

import { type ReactNode } from 'react'

export default function ScrollContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory touch-pan-y"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {children}
    </div>
  )
}
