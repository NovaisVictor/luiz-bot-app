import Apple from '@/assets/apple'
import { GradiantCard } from './gradiant-card'
import Android from '@/assets/android'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { CirclePlus, Download, Share } from 'lucide-react'

export function InstallAppCard() {
  return (
    <GradiantCard>
      <div className="bg-secondary p-4 rounded-md flex flex-col items-center justify-center text-center text-lg font-extrabold gap-4">
        <Download size={32} className="text-primary" />
        <h3>Instale nosso app</h3>

        <div className="grid grid-cols-2 gap-2">
          <Dialog>
            <DialogTrigger>
              <div className="flex gap-2 items-center border border-primary p-2 rounded-md">
                <Apple className="size-8 dark:fill-primary" />
                IOS
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Instale nosso App</DialogTitle>
                <DialogDescription>
                  Siga as etapas abaixo e instale sso nosso app em seu
                  dispositivo.
                </DialogDescription>
              </DialogHeader>
              <Apple className="size-12 dark:fill-white mx-auto" />

              <h5 className="text-center font-semibold">IOS (Safari)</h5>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 items-center">
                  <div className="mx-auto border text-primary h-24 w-2/3 flex justify-center items-center rounded-md border-primary text-xl font-bold">
                    01
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <p>Clique no símbolo de compartilhar</p>
                    <Share size={32} />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="mx-auto border text-primary h-24 w-2/3 flex justify-center items-center rounded-md border-primary text-xl font-bold">
                    02
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <p>Procure o botão “Tela de Início”</p>
                    <CirclePlus size={32} />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="mx-auto border text-primary h-24 w-2/3 flex justify-center items-center rounded-md border-primary text-xl font-bold">
                    03
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <p>Adicione o app a tela de início</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <div className="flex gap-2 items-center border border-primary p-2 rounded-md">
                <Android className="size-8 dark:fill-primary" />
                Android
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Instale nosso App</DialogTitle>
                <DialogDescription>
                  Siga as etapas abaixo e instale o nosso app em seu
                  dispositivo.
                </DialogDescription>
              </DialogHeader>
              <Android className="size-12 dark:fill-white mx-auto" />

              <h5 className="text-center font-semibold">
                Android (Google Chrome)
              </h5>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 items-center">
                  <div className="mx-auto border text-primary h-24 w-2/3 flex justify-center items-center rounded-md border-primary text-xl font-bold">
                    01
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <p>
                      Clique no icone de “Mais opções” no canto superior
                      direito.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="mx-auto border text-primary h-24 w-2/3 flex justify-center items-center rounded-md border-primary text-xl font-bold">
                    02
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <p>
                      Clique em “Instalar Aplicativo” ou “Adicionar a tela
                      inicial”
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="mx-auto border text-primary h-24 w-2/3 flex justify-center items-center rounded-md border-primary text-xl font-bold">
                    03
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <p>
                      Confirme a ação clicando em “Instalar” no popup que
                      aparecerá na tela.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </GradiantCard>
  )
}
