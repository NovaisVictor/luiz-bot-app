import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luiz Bot App',
  description: 'Luiz Bot App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`dark antialiased overflow-x-hidden bg-gradient-to-b from-primary/40 to-black`}
      >
        {children}
      </body>
    </html>
  )
}
