import WhatsApp from '@/assets/whatsapp'
import { LogOut } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-4xl">Logo</h1>
      <div className="flex items-center gap-4 bg-gradient-to-r from-primary/40 to-accent py-1.5 px-4 rounded-3xl">
        <Button size={'icon'} className="rounded-full">
          <WhatsApp />
        </Button>
        <LogOut size={26} />
      </div>
    </header>
  )
}
