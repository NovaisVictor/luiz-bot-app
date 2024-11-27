import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import { Ban, Play } from 'lucide-react'

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
          <Button className="py-8 text-xl font-bold rounded-3xl">
            Cadastrar na Plataforma Segura
          </Button>
          <p className="text-center">
            Faça seu cadsatro na Única Plataforma Segura que eu INDÍCO e saque
            seus possíveis lucros com tranquilidade!
          </p>
          <span className="flex gap-2 justify-center">
            <Ban /> Jogue com responsabilidade!
          </span>
        </div>
      </GradiantCard>
      <InstallAppCard />
    </div>
  )
}
