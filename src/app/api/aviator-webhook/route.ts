'use server'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { sendEvent } from '../sse/event-sender'

type AviatorHistory = {
  id: string
  valor: string
  created_at: string
}

let recentEvents: AviatorHistory[] = []
let countAfterTen = 0

const aviatorWebhookSchema = z.object({
  aviator_history: z.array(
    z.object({
      id: z.string(),
      valor: z.string(),
      created_at: z.string().datetime(),
    }),
  ),
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkPatterns = (_lastEntrence: AviatorHistory) => {
  const lastThree = recentEvents.slice(-3)
  const lastFour = recentEvents.slice(-4)

  // Verifica padrão roxo
  const allInRangePurple = lastThree.every((event) => {
    const valor = parseFloat(event.valor)
    return valor >= 2.0 && valor <= 9.99
  })

  // Verifica padrão azul quebrado
  const allInRangeBlueBroken = lastFour.slice(0, 3).every((event) => {
    const valor = parseFloat(event.valor)
    return valor >= 1.0 && valor < 2.0
  })

  const nextInRange =
    lastFour.length === 4 &&
    parseFloat(lastFour[3].valor) >= 2.0 &&
    parseFloat(lastFour[3].valor) < 10.0

  // Retorna as condições
  return { allInRangePurple, allInRangeBlueBroken, nextInRange }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { aviator_history: aviatorHistory } = aviatorWebhookSchema.parse(data)

    recentEvents.push(aviatorHistory[0])
    if (recentEvents.length > 10) {
      recentEvents.shift()
    }

    // sendEvent({
    //   entrance: 2,
    //   standart: 'Padrão Repetição de Vela Rosa',
    //   loadign: false,
    // })
    // return new Response(
    //   JSON.stringify({
    //     status: 'success',
    //     message: 'Nenhum evento anterior encontrado.',
    //   }),
    //   { status: 200 },
    // )

    const lastEntrence = recentEvents[recentEvents.length - 1]
    const lastValue = parseFloat(lastEntrence.valor)

    const secondLastValue =
      recentEvents.length > 1
        ? parseFloat(recentEvents[recentEvents.length - 2].valor)
        : null

    // Verifica padrão de repetição de vela rosa
    if (lastValue >= 10 && (secondLastValue === null || secondLastValue < 10)) {
      sendEvent({
        entrance: lastEntrence.valor,
        standart: 'Padrão Repetição de Vela Rosa',
        loadign: false,
      })
      recentEvents = [] // Reinicia o array
      countAfterTen = 0 // Reinicia o contador
      return new Response(JSON.stringify({ status: 'success' }), {
        status: 200,
      })
    }

    // Atualiza o contador para eventos após um valor 10 ou mais
    countAfterTen = countAfterTen >= 0 ? countAfterTen + 1 : countAfterTen

    // Verifica padrões
    const { allInRangePurple, allInRangeBlueBroken, nextInRange } =
      checkPatterns(lastEntrence)

    // Padrão sequencial de roxo
    if (allInRangePurple) {
      sendEvent({
        entrance: lastEntrence.valor,
        standart: 'Padrão Sequencial de Roxo',
        loadign: false,
      })
      recentEvents = [] // Reinicia o array
      return new Response(JSON.stringify({ status: 'success' }), {
        status: 200,
      })
    }

    // Padrão quebra de sequencial
    if (allInRangeBlueBroken && nextInRange) {
      sendEvent({
        entrance: lastEntrence.valor,
        standart: 'Padrão Quebra de Sequencial',
        loadign: false,
      })
      recentEvents = [] // Reinicia o array
      return new Response(JSON.stringify({ status: 'success' }), {
        status: 200,
      })
    }

    // Verifica se é o quarto evento após um evento com valor 10 ou mais
    if (countAfterTen === 4) {
      console.log(
        'Ação realizada após o terceiro evento após um valor de 10 ou mais!',
      )
      sendEvent({
        entrance: lastEntrence.valor,
        standart: 'Padrão de Quinta Casa',
        loadign: true,
      })
      countAfterTen = -1 // Para evitar múltiplas ações
      return new Response(JSON.stringify({ status: 'success' }), {
        status: 200,
      })
    }

    // Envia evento padrão se nenhum padrão foi detectado
    sendEvent({
      entrance: 0,
      standart: 'Nenhum padrão do momento...',
      loadign: true,
    })

    return new Response(JSON.stringify({ status: 'success' }), { status: 200 })
  } catch (error) {
    console.error('Erro ao processar o webhook:', error)

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Erro de validação',
          issues: error.errors,
        }),
        { status: 400 },
      )
    }

    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Erro inesperado ao processar a solicitação',
      }),
      { status: 500 },
    )
  }
}
