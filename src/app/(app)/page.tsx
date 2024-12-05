/* eslint-disable @next/next/no-img-element */

'use client'
import Plus18 from '@/assets/plus-18'
import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
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
      <div className="bg-primary rounded-2xl text-center py-8 space-y-2">
        <h1 className="text-4xl font-extrabold uppercase">Importante!</h1>
        <p className="text-lg font-semibold">
          Assista o video antes de começar
        </p>
      </div>
      <GradiantCard>
        <div
          id="vid_674bdeafc13d82038b390b6e"
          style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
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
