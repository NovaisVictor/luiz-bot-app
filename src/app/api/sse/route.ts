'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { sendEvent, addClient, removeClient } from './event-sender'

export async function GET(req: Request) {
  // Criar um ReadableStream para enviar eventos
  const stream = new ReadableStream({
    start(controller) {
      // Adicionar o controlador à lista de clientes
      addClient(controller)

      // Remover o cliente da lista quando a conexão for fechada
      req.signal.addEventListener('abort', () => {
        removeClient(controller)
      })
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}

// Adicione uma função POST para receber dados do webhook e enviar para os clientes SSE
export async function POST(req: Request) {
  const data = await req.json()
  sendEvent(data) // Enviar dados para os clientes conectados
  return NextResponse.json({ message: 'Dados enviados para os clientes' })
}
