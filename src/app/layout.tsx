import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'
import Navbar from '@/components/sections/Navbar'
import PageTransition from '@/components/ui/PageTransition'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import ClientOnly from '@/components/ui/ClientOnly'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { LenisProvider } from '@/components/providers/LenisProvider'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
  fallback: ['system-ui'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui'],
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Mukesh Patel | Creative Java Portfolio',
  description:
    'Dark glassmorphism portfolio with neon-electric depth, showing Java engineering, automation expertise, and full-stack execution.',
  metadataBase: new URL('https://mukesh-patel.vercel.app'),
  applicationName: 'Mukesh Patel Portfolio',
  icons: {
    icon: ['/favicon.svg', '/favicon.ico'],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Mukesh Patel | Creative Java Portfolio',
    description:
      'Dark glassmorphism portfolio with neon-electric depth, showing Java engineering, automation expertise, and full-stack execution.',
    url: '/',
    siteName: 'Mukesh Patel Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mukesh Patel portfolio preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukesh Patel | Creative Java Portfolio',
    description:
      'Dark glassmorphism portfolio with neon-electric depth, showing Java engineering, automation expertise, and full-stack execution.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#050816" />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable} bg-bg-primary text-text-primary antialiased`}
        style={{ backgroundColor: '#050816' }}
        suppressHydrationWarning
      >
        <ClientOnly>
          <ScrollProgress />
        </ClientOnly>
        <ThemeProvider>
          <ClientOnly>
            <LenisProvider />
          </ClientOnly>
          <ClientOnly fallback={null}>
            <CustomCursor />
          </ClientOnly>
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
