import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/sections/Navbar'
import PageTransition from '@/components/ui/PageTransition'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mukesh Patel | Creative Java Portfolio',
  description:
    'Dark glassmorphism portfolio with neon-electric depth, showing Java engineering, automation expertise, and full-stack execution.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
