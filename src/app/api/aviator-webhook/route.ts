'use server'

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  const aviatorWebhookSchema = z.object({
    aviator_history: z.array(
      z.object({
        id: z.string(),
        valor: z.string(),
        created_at: z.string().datetime(),
      }),
    ),
  })
  try {
    const data = await req.json()

    const { aviator_history: aviatorHistory } = aviatorWebhookSchema.parse(data)
    console.log(aviatorHistory)
    return NextResponse.json(
      { success: 'Successfully received' },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(`Webhook error: ${error.message}`, {
        status: 400,
      })
    } else {
      return new NextResponse(`Webhook error: ${String(error)}`, {
        status: 400,
      })
    }
  }
}
