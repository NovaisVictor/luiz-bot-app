import Plus18 from '@/assets/plus-18'
import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="bg-primary rounded-2xl text-center py-8 space-y-2">
        <h1 className="text-4xl font-extrabold uppercase">Importante!</h1>
        <p className="text-lg font-semibold">
          Assista o video antes de começar
        </p>
      </div>
      <GradiantCard>
        <div className="py-14 flex justify-center">
          <Play className="bg-primary rounded-full p-4" size={64} />
        </div>
      </GradiantCard>
      <GradiantCard>
        <div className="flex flex-col justify-center gap-4">
          <Button className="py-8 text-xl font-bold rounded-3xl" asChild>
            <Link href={'/sign-up'}>Cadastrar na Plataforma Segura</Link>
          </Button>
          <p className="text-center">
            Faça seu cadastro na Única Plataforma Segura que eu INDÍCO e saque
            seus possíveis lucros com tranquilidade!
          </p>
          <span className="flex gap-2 justify-center items-center">
            <Plus18 className="size-7 fill-white" />
            Jogue com responsabilidade!
          </span>
        </div>
      </GradiantCard>
      <InstallAppCard />
    </div>
  )
}
