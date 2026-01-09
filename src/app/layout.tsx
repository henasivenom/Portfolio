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
        <title>Mukesh Patel | Java Developer</title>
        <meta name="description" content="Portfolio of Mukesh Patel - Java Developer skilled in GUI applications, database design, and manual testing. AWS Cloud Foundations certified with expertise in Java Swing, AWT, JDBC, and MySQL." />
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
