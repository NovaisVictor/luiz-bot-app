'use client'
/* eslint-disable @next/next/no-img-element */
import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Course() {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://scripts.converteai.net/cd42e2f1-44f3-470d-bb0a-328b0476d231/players/674bdeafc13d82038b390b6e/player.js'
    script.async = true
    document.head.appendChild(script)

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script)
    }
  }, [])
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
          <div
            id="vid_674bdeafc13d82038b390b6e"
            style={{
              position: 'relative',
              width: '100%',
              padding: '56.25% 0 0',
            }}
          >
            <img
              id="thumb_674bdeafc13d82038b390b6e"
              src="https://images.converteai.net/cd42e2f1-44f3-470d-bb0a-328b0476d231/players/674bdeafc13d82038b390b6e/thumbnail.jpg"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              alt="thumbnail"
            />
            <div
              id="backdrop_674bdeafc13d82038b390b6e"
              style={{
                WebkitBackdropFilter: 'blur(5px)',
                backdropFilter: 'blur(5px)',
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '100%',
              }}
            />
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
