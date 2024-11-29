/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'

const SignalComponent = () => {
  const baseUrl = 'https://api.velas10x.com.br/game/6'
  const requestHeaders = {
    'Content-Type': 'application/json',
  }

  // Defina o tipo do estado como um array de strings
  const [messagesResult, setMessagesResult] = useState<string[]>([])
  const [signalMessage, setSignalMessage] =
    useState<string>('Iniciando análise')
  const [signalValue, setSignalValue] = useState<number>(2)
  const [protectionText, setProtectionText] = useState<string>('')
  const [afterText, setAfterText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const messages = [
    'Buscando padrões',
    'Analisando as velas',
    'Processando dados',
    'Procurando a melhor oportunidade de entrada',
  ]

  const getSignals = async () => {
    const response = await fetch(`${baseUrl}`, {
      method: 'GET',
      headers: requestHeaders,
    })

    if (response.ok) {
      const signal = await response.json()
      if (signal.signalEntity.message_result_signal) {
        const message = signal.signalEntity.message_result_signal
        if (!messagesResult.includes(message)) {
          setMessagesResult((prev) => [message, ...prev])
        }
      }
      return signal
    } else {
      const respError = await response.json()
      alert(`${respError.message}`)
    }
  }

  const renderSignal = async () => {
    setLoading(true)
    const signal = await getSignals()

    const message =
      signal?.signalEntity?.message_signal === 'Analisando...'
        ? 'Iniciando análise'
        : signal?.signalEntity?.message_signal || ''

    setSignalMessage(message)

    if (signal?.signalEntity?.number_signal) {
      setLoading(false)
      setSignalValue(signal.signalEntity.number_signal)
      setProtectionText('Até 3 Gales')
      setAfterText(
        "<p class='text-green-500'>Alto: 2 x</p> <p class='text-red-600'>Baixo: 10 x</p>",
      )
    } else {
      setLoading(true)
      setSignalValue(0)
      setProtectionText('')
      setAfterText('')
    }
  }

  const updateMessageAnalytics = () => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    setSignalMessage(messages[randomIndex])
  }

  useEffect(() => {
    const intervalId = setInterval(renderSignal, 1000)
    const signalsInterval = setInterval(updateMessageAnalytics, 8000)
    renderSignal()

    return () => {
      clearInterval(intervalId)
      clearInterval(signalsInterval)
    }
  }, [renderSignal, updateMessageAnalytics])

  const createHistoric = () => {
    return messagesResult.map((message, index) => {
      const parts = message.split('-')
      const colorClass =
        Number(parts[1]) >= 2 ? 'text-green-500' : 'text-red-600'
      return (
        <li
          key={index}
          className={`min-w-[160px] text-xs bg-black p-2 rounded-lg ${colorClass}`}
        >
          {`${parts[0]} - ${parts[1]}`}
        </li>
      )
    })
  }

  return (
    <div className="bg-accent p-3 rounded-2xl flex flex-col gap-5 overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <span className="flex flex-col gap-2">
          <h3>Entrar após:</h3>
          <div className="flex items-center justify-center bg-black rounded-lg h-12">
            {loading ? (
              <Loader />
            ) : (
              <p
                className={`signalContainer ${signalValue >= 2 ? 'text-green-500' : 'text-red-600'}`}
              >
                {signalValue} x
              </p>
            )}
          </div>
        </span>
      </div>
      <div className="flex justify-between">
        <span className="flex flex-col gap-2">
          <h3>Proteções:</h3>
          <div className="flex items-center justify-center bg-black rounded-lg h-12">
            <p className="protection">{protectionText}</p>
          </div>
        </span>
        <span className="flex flex-col gap-2">
          <h3>Sair após:</h3>
          <div className="flex items-center justify-center bg-black rounded-lg h-12">
            <p
              className="after"
              dangerouslySetInnerHTML={{ __html: afterText }}
            />
          </div>
        </span>
      </div>
      <div className="flex items-center justify-center text-center text-white bg-primary rounded-lg p-2">
        {signalMessage}
      </div>
      <div className="flex flex-col text-white">
        <ul className="flex gap-2 overflow-x-scroll whitespace-nowrap">
          {createHistoric()}
        </ul>
      </div>
    </div>
  )
}

const Loader = () => (
  <div className="loader border-3 border-solid border-blue-600 border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
)

export default SignalComponent
