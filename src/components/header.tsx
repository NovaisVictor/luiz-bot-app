import { LogOut, MessageCircle } from 'lucide-react'

export function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-4xl">Logo</h1>
      <div className="flex gap-4 bg-gradient-to-r from-primary/40 to-accent py-1.5 px-4 rounded-3xl">
        <MessageCircle className="rounded-full" size={32} />
        <LogOut size={32} />
      </div>
    </header>
  )
}
