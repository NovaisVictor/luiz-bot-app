/* eslint-disable @typescript-eslint/no-explicit-any */

import redis from '@/lib/redis'

const clients: { [key: string]: ReadableStreamDefaultController<any> } = {}

export const sendEvent = (data: any) => {
  Object.values(clients).forEach((controller) => {
    controller.enqueue(`data: ${JSON.stringify(data)}\n\n`)
  })
}

export const addClient = (
  clientId: string,
  controller: ReadableStreamDefaultController<any>,
) => {
  clients[clientId] = controller
}

export const removeClient = (clientId: string) => {
  delete clients[clientId]
}

export const addClientToRedis = async (clientId: string) => {
  await redis.lpush('clients', clientId)
}

export const removeClientFromRedis = async (clientId: string) => {
  await redis.lrem('clients', 0, clientId)
}
