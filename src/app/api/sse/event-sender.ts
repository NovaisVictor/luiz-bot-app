/* eslint-disable @typescript-eslint/no-explicit-any */
let clients: Array<ReadableStreamDefaultController<any>> = []

// Função para enviar dados para todos os clientes conectados
export const sendEvent = (data: any) => {
  clients.forEach((client) => {
    client.enqueue(`data: ${JSON.stringify(data)}\n\n`)
  })
}

// Função para adicionar um cliente
export const addClient = (controller: ReadableStreamDefaultController<any>) => {
  clients.push(controller)
}

// Função para remover um cliente
export const removeClient = (
  controller: ReadableStreamDefaultController<any>,
) => {
  clients = clients.filter((c) => c !== controller)
}
