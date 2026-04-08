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
        <title>Mukesh Patel | Java Developer & Automation Tester</title>
        <meta
          name="description"
          content="Mukesh Patel's portfolio featuring Java development, Spring Boot, Selenium automation, SDLC/STLC expertise, and polished responsive UI design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#020617" />
        <meta property="og:title" content="Mukesh Patel | Java Developer & Automation Tester" />
        <meta
          property="og:description"
          content="A smooth, modern portfolio highlighting Java, Spring Boot, Selenium automation, and premium UI craftsmanship."
        />
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
