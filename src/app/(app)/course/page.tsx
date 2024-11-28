import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function Course() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="text-center space-y-4 w-full">
        <h1 className="text-xl font-bold">
          Essas são as minhas estratégias pessoais de Velas Rosas, Controle
          Emocional e Gereciamento de Banca
        </h1>
        <p className="text-center">
          Essas são as minhas estratégias pessoais de Velas Rosas, Controle
          Emocional e Gereciamento de Banca
        </p>
        <Button className="py-8 w-full text-xl font-bold rounded-3xl">
          Acessar Planilha
        </Button>
      </div>
      <h1 className="text-xl font-bold text-center">
        Assista as aulas abaixo e aprenda a lucrar com o{' '}
        <span className="text-primary">Luiz App</span>
      </h1>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          01 - <span className="text-primary">Mostrando o App</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          02 - <span className="text-primary">Gerenciamento de Banca</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          03 - <span className="text-primary">Como os Slots funcionam</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          04 - <span className="text-primary">Pegando os sinais</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          05 - <span className="text-primary">Padrão de acompanhamento</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          06 - <span className="text-primary">Padrão de quebra</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          07 - <span className="text-primary">Controle emocional</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">
          08 - <span className="text-primary">Gerencionamneto de banca</span>
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <InstallAppCard />
    </div>
  )
}
