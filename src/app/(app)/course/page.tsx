'use client'
import { GradiantCard } from '@/components/gradiant-card'
import { InstallAppCard } from '@/components/install-app-card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Play } from 'lucide-react'
import Link from 'next/link'
import { useState, type ChangeEvent } from 'react'

export default function Course() {
  const DEFAULT_RECOMMENDATION = 0

  // Define um tipo para os modos de perfil
  type ProfileMode = 'con' | 'mod' | 'agr'

  const [bankBalance, setBankBalance] = useState<number>(0)
  const [perfilMode, setPerfilMode] = useState<ProfileMode>('con')
  const [recommendedEntry, setRecommendedEntry] = useState<number>(
    DEFAULT_RECOMMENDATION,
  )
  const [recommendedStopwin, setRecommendedStopwin] = useState<number>(
    DEFAULT_RECOMMENDATION,
  )
  const [recommendedStoploss, setRecommendedStoploss] = useState<number>(
    DEFAULT_RECOMMENDATION,
  )

  // Define um mapeamento de modo de perfil para multiplicadores
  const profileMultipliers: Record<
    ProfileMode,
    { entry: number; stopWin: number; stopLoss: number }
  > = {
    con: { entry: 0.03, stopWin: 0.05, stopLoss: 0.15 },
    mod: { entry: 0.07, stopWin: 0.15, stopLoss: 0.25 },
    agr: { entry: 0.12, stopWin: 0.2, stopLoss: 0.4 },
  }

  const handleBankBalance = (e: ChangeEvent<HTMLInputElement>) => {
    const bankBalanceInput = parseFloat(e.target.value)
    setBankBalance(bankBalanceInput)

    // Verifica se bankBalance é um número válido
    if (!isNaN(bankBalanceInput) && bankBalanceInput > 0) {
      updateRecommendations(bankBalanceInput, perfilMode)
    } else {
      // Valor inválido
      resetRecommendations()
    }
  }

  const handlePerfilChange = (newPerfilMode: ProfileMode) => {
    setPerfilMode(newPerfilMode)

    // Recalcula as recomendações com o valor atual do saldo bancário
    updateRecommendations(bankBalance, newPerfilMode)
  }

  const updateRecommendations = (balance: number, mode: ProfileMode) => {
    const multipliers = profileMultipliers[mode] || {
      entry: 0,
      stopWin: 0,
      stopLoss: 0,
    }

    setRecommendedEntry(balance * multipliers.entry)
    setRecommendedStopwin(balance * multipliers.stopWin)
    setRecommendedStoploss(balance * multipliers.stopLoss)
  }

  const resetRecommendations = () => {
    setRecommendedEntry(DEFAULT_RECOMMENDATION)
    setRecommendedStoploss(DEFAULT_RECOMMENDATION)
    setRecommendedStopwin(DEFAULT_RECOMMENDATION)
  }

  const formatToBRL = (value: number | 0): string => {
    if (value === 0) return 'R$ 0,00'
    return `R$ ${value.toFixed(2).replace('.', ',')}`
  }

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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="py-8 w-full text-xl font-bold rounded-3xl">
              Acessar Planilha
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[350px] p-8">
            <DialogHeader>
              <DialogTitle>
                Escolha o perfil e digite o valor da sua banca
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Select onValueChange={handlePerfilChange}>
                  <SelectTrigger className="bg-accent mt-6 rounded-xl">
                    <SelectValue placeholder="Escolha seu perfil" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="con">Conservador</SelectItem>
                    <SelectItem value="mod">Moderado</SelectItem>
                    <SelectItem value="agr">Agressivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Saldo de banca</Label>
                <Input
                  className="bg-accent rounded-xl"
                  type="number"
                  onChange={handleBankBalance}
                />
              </div>
              <div className="space-y-2">
                <Label>Entrada recomendada</Label>
                <Input
                  readOnly
                  className="bg-accent rounded-xl"
                  value={formatToBRL(recommendedEntry)}
                />
              </div>
              <div className="space-y-2">
                <Label>Stopwin recomendado</Label>
                <Input
                  readOnly
                  className="bg-accent rounded-xl"
                  value={formatToBRL(recommendedStopwin)}
                />
              </div>
              <div className="space-y-2">
                <Label>Stoploss recomendado</Label>
                <Input
                  readOnly
                  className="bg-accent rounded-xl"
                  value={formatToBRL(recommendedStoploss)}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
          <Link
            href={
              'https://go.aff.sortenabet.com/tf9esqb9?utm_campaign=app&utm_content=luiz'
            }
          >
            Clique aqui e crie sua conta
          </Link>
          {/* <Link href={'/sign-up'}>Clique aqui e crie sua conta</Link> */}
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
