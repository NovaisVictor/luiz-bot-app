import { Header } from '@/components/header'
import { NavMenu } from '@/components/nav-menu'
import { PixInfinit } from '@/components/pix-infinit'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const hasCookie = cookieStore.has('token')
  if (!hasCookie) {
    redirect('/login')
  }
  return (
    <>
      <Header />
      <PixInfinit />
      <div className="p-8 pb-32">{children}</div>
      <NavMenu />
    </>
  )
}
