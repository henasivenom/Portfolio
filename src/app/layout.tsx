'use client'

import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Mukesh | Software Developer & Digital Craftsman</title>
        <meta name="description" content="A transcendent, cinematic portfolio experience showcasing the work of Mukesh - Software Developer, Creative Technologist, and Digital Craftsman." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
