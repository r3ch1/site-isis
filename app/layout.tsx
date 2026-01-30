import './globals.css'
import { Montserrat } from 'next/font/google'
import { siteConfig } from './config/site'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: siteConfig.fullTitle,
  description:
    'Advogada especializada em Direito do Trabalho, defendendo os direitos dos trabalhadores com excelência e dedicação.',
  keywords:
    'advogada trabalhista, direito do trabalho, reclamação trabalhista, advogado trabalhista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.className} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}