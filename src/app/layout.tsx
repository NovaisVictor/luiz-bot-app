import type { Metadata } from 'next'
import './globals.css'
import { NavMenu } from '@/components/nav-menu'
import { Header } from '@/components/header'

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
    <html lang="en">
      <body className={`dark antialiased p-8 pb-32 overflow-x-hidden`}>
        <Header />
        {children}
        <NavMenu />
      </body>
    </html>
  )
}
