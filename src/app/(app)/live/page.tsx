import Plus18 from '@/assets/plus-18'
import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import { Play, Send } from 'lucide-react'
import Link from 'next/link'
export default function Live() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <h1 className="text-2xl">
        Particpe da minha live e busque velas rosas de 30x a 100x apenas
        copiando as minhas entradas
      </h1>
      <GradiantCard>
        <div className="py-14 flex justify-center">
          <Play className="bg-primary rounded-full p-4" size={64} />
        </div>
      </GradiantCard>
      <GradiantCard>
        <div className="flex flex-col justify-center gap-4">
          <p className="text-center">
            Basta clicar no botão abaixo para participar da live AINDA HOJE
          </p>
          <Button
            className="py-8 text-lg font-bold rounded-3xl bg-gradient-to-r from-[#27A7E7] to-[#0E77A9]"
            asChild
          >
            <Link href={'https://t.me/+GDht0xqX6MIzYWIx'}>
              <Send size={32} />
              Entrar no grupo do telegram
            </Link>
          </Button>
          <Button
            className="py-8 text-lg font-bold rounded-3xl bg-gradient-to-r from-[#E84278] to-[#FCCF40]"
            asChild
          >
            <Link
              href={
                'https://www.instagram.com/luiz100x/profilecard/?igsh=eWV0emZzZW5lY2Vu'
              }
            >
              <Send />
              Acessar perfil do instagral
            </Link>
          </Button>
          <Button
            className="py-8 text-lg font-bold rounded-3xl bg-gradient-to-r from-red-700 to-red-500"
            asChild
          >
            <Link href={'https://youtube.com/@luiz100x?si=HYW1ft2hF4kEIhUf'}>
              <Send />
              Canal do YouTube
            </Link>
          </Button>

          <span className="flex gap-2 justify-center items-center text-primary text-sm">
            <Plus18 className="size-6 fill-primary" />
            Jogue com responsabilidade!
          </span>
        </div>
      </GradiantCard>
      <InstallAppCard />
    </div>
  )
}
