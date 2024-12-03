import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function Course() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="text-center space-y-4 w-full">
        {/* <p className="text-center">
          Assista as aulas abaixo para aprender como lucrar com o app{' '}
          <span className="font-bold">Click Cash</span>
        </p> */}
        <h1 className="text-xl font-bold uppercase">
          Planilha de gerenciamento
        </h1>
        <Button className="py-8 w-full text-xl font-bold rounded-3xl">
          Acessar Planilha
        </Button>
      </div>
      <h1 className="text-2xl font-bold text-center">
        Assista as aulas abaixo e aprenda a lucrar com o{' '}
        <span className="text-primary">Click Cash</span>
      </h1>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center uppercase">
          Como cadastrar e depositar na plataforma
          {/* 01 - <span className="text-primary">Mostrando o App</span> */}
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
        <Button size={'sm'} className="w-11/12 mx-auto mt-4">
          <Link href={'/sign-up'}>Clique aqui e crie sua conta</Link>
        </Button>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center uppercase">
          Como instalar o click cash
          {/* 02 - <span className="text-primary">Gerenciamento de Banca</span> */}
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center uppercase">
          Aprendendo a lucrar na prática
          {/* 03 - <span className="text-primary">Como os Slots funcionam</span> */}
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center uppercase">
          Como efetuar o saque após fazer o seu lucro
          {/* 04 - <span className="text-primary">Pegando os sinais</span> */}
        </h1>
        <GradiantCard>
          <div className="py-14 flex justify-center">
            <Play className="bg-primary rounded-full p-4" size={64} />
          </div>
        </GradiantCard>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center uppercase">
          Não perca o seu dinheiro
          {/* 05 - <span className="text-primary">Padrão de acompanhamento</span> */}
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
