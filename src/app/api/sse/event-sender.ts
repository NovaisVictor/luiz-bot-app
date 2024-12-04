/* eslint-disable @typescript-eslint/no-explicit-any */

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
