'use server'
import { NextResponse } from 'next/server'
import { sendEvent, addClient, removeClient } from './event-sender'

export async function GET(req: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const clientId = Date.now().toString() // Gerar um ID único para o cliente
      addClient(clientId, controller) // Adiciona o cliente ao gerenciamento de clientes

      // Enviar um evento de exemplo a cada 5 segundos
      const sendHeartbeat = setInterval(() => {
        controller.enqueue(
          `data: ${JSON.stringify({ message: 'heartbeat' })}\n\n`,
        )
      }, 5000)

      req.signal.addEventListener('abort', () => {
        clearInterval(sendHeartbeat) // Limpa o intervalo quando o cliente desconecta
        removeClient(clientId) // Remove o cliente do gerenciamento
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

// Rota POST para enviar dados
export async function POST(req: Request) {
  const data = await req.json()
  sendEvent(data) // Enviar dados para os clientes conectados
  return NextResponse.json({ message: 'Dados enviados para os clientes' })
}
