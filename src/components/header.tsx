'use client'
import { cn } from '@/lib/utils'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()
  return (
    <div className="mb-10 bg-gradient-to-b from-emerald-950 to-primary/60 px-4">
      <header
        className={cn(
          'flex justify-between items-center mb-10 py-6',
          pathName === '/aviator' && 'hidden',
        )}
      >
        <div className="flex gap-4 items-center text-lg font-semibold">
          <Image src={'/LOGO.png'} width={160} height={80} alt="" />
          <p>Boas-vindas!</p>
        </div>
        <div>
          <LogOut className="size-6 text-primary" />
        </div>
      </header>
    </div>
  )
}
