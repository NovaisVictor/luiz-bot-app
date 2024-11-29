import WhatsApp from '@/assets/whatsapp'
import { LogOut } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { PixInfinit } from './pix-infinit'

export function Header() {
  return (
    <div className="mb-10">
      <header className="flex justify-between items-center mb-10">
        <Image src={'/LOGO.png'} width={200} height={80} alt="" />
        <div className="flex items-center gap-4 bg-gradient-to-r from-primary/40 to-accent py-1.5 px-4 rounded-3xl">
          <Button size={'icon'} className="rounded-full" asChild>
            <Link href={'https://chat.whatsapp.com/JIGj2RN573oLbjlfKxVERZ'}>
              <WhatsApp />
            </Link>
          </Button>
          <LogOut size={26} />
        </div>
      </header>
      <PixInfinit />
    </div>
  )
}
