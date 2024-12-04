'use client'

import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type AviatorSignal = {
  standart: string
  entrance: number
  loading: boolean
}
export function SignalComponent() {
  const [data, setData] = useState<AviatorSignal>({
    standart: 'Analisando',
    entrance: 0,
    loading: true,
  })

  useEffect(() => {
    const eventSource = new EventSource('/api/sse')

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data)
      setData(newData) // Atualiza o estado com os novos dados recebidos
    }

    // Lida com erros, se necessário
    eventSource.onerror = (error) => {
      console.error('Erro no EventSource:', error)
      eventSource.close() // Fecha a conexão em caso de erro
    }

    return () => {
      eventSource.close() // Fecha a conexão quando o componente é desmontado
    }
  })
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Entrar após:</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <span className="text-2xl">
            {data.entrance <= 0 ? (
              <div className="flex items-center justify-center gap-2">
                <p>Analisando padrão..</p>
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              `${data.entrance}x`
            )}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold">Proteções:</h2>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <span>
            {data.loading ? (
              <div className="flex items-center justify-center gap-2">
                <p>Analisando padrão..</p>
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              data.standart
            )}
          </span>
        </div>
      </div>

      <div className="flex justify-between gap-4 mb-4">
        <div className="w-full">
          <h2 className="text-lg font-bold">Proteções:</h2>
          <div className="bg-gray-800 h-16 flex items-center justify-center rounded-lg text-center">
            <span className="text-white">
              {data.loading ? (
                <div className="flex items-center justify-center gap-2">
                  <p>Analisando padrão..</p>
                  <Loader2 className="animate-spin" />
                </div>
              ) : (
                data.standart
              )}
            </span>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-bold">Sair após:</h2>
          <div className="flex justify-between bg-gray-800 h-16 p-2 rounded-lg">
            <div>
              <span className="block">
                Protetora: <span className="text-red-500">2 x</span>
              </span>
              <span className="block">
                Potencializadora: <span className="text-red-500">10 x</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
