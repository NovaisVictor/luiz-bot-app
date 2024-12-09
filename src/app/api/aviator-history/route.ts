'use server'
import { NextRequest } from 'next/server'
import { z } from 'zod'

// Define o esquema para um único objeto de histórico
const aviatorHistorySchema = z.object({
  id: z.string(),
  valor: z.string(),
  created_at: z.string().datetime(), // Validação para formato de data
})

// Define o esquema para um array de objetos de histórico
const aviatorHistoryArraySchema = z.array(aviatorHistorySchema)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    // Fazendo o fetch para obter os dados do endpoint
    const response = await fetch(
      'https://n8n.sortenabetferramentas.online/webhook/2f249b4a-31a2-4163-b802-dadde415733f',
    )

    if (!response.ok) {
      throw new Error('Erro ao buscar dados do webhook')
    }

    const data = await response.json()

    // Valida o array de históricos
    const aviatorHistory = aviatorHistoryArraySchema.parse(data)

    // Análise dos padrões diretamente do aviatorHistory
    const lastFour = aviatorHistory.slice(0, 4) // Pega os 4 primeiros, que são os mais recentes
    const lastThree = aviatorHistory.slice(0, 3) // Pega os 3 primeiros, que são os mais recentes

    // Verifica padrão roxo
    const allInRangePurple = lastThree.every((event) => {
      const valor = parseFloat(event.valor)
      return valor >= 2.0 && valor <= 9.99
    })

    const firstInRange =
      parseFloat(lastFour[0].valor) >= 2.0 &&
      parseFloat(lastFour[0].valor) < 10.0 // Verifica se o primeiro evento está entre 2.0 e 10.0

    const allOthersInRange = lastFour.slice(1).every((event) => {
      const valor = parseFloat(event.valor)
      return valor < 2.0 // Verifica se os índices 1, 2 e 3 são todos menores que 2.0
    })

    // Agora você pode usar as variáveis firstInRange e allOthersInRange
    const isPatternBlueBroken = firstInRange && allOthersInRange

    // Verifica o último valor
    const lastEntrence = aviatorHistory[0] // O último evento é o primeiro no array
    const lastValue = parseFloat(lastEntrence.valor)

    // Inicializa a resposta padrão
    let responsePayload = {
      entrance: 0,
      loading: true,
      standart: '',
    }

    // Verifica padrão sequencial roxo
    if (allInRangePurple) {
      responsePayload = {
        entrance: lastValue,
        loading: false,
        standart: 'Padrão Sequencial de Roxo',
      }
    }
    // Padrão quebra de sequencial
    else if (isPatternBlueBroken) {
      responsePayload = {
        entrance: lastValue,
        loading: false,
        standart: 'Padrão Quebra de Sequencial',
      }
    }

    // Retorna a resposta
    return new Response(
      JSON.stringify({ status: 'success', ...responsePayload }),
      { status: 200 },
    )
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
