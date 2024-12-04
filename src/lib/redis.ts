// lib/redis.js
import Redis from 'ioredis'

// Substitua os valores abaixo pelos valores fornecidos pelo Upstash
const redis = new Redis({
  host: 'assured-guinea-25510.upstash.io', // Exemplo: <your-upstash-id>.upstash.io
  port: 6379, // Porta padrão do Redis, geralmente 6379
  password: 'AWOmAAIjcDFjZDY1NDYyZGM5NmI0MjYzYTEzMDU5OTMxNWU3MTljNHAxMA', // A senha que você obteve no Upstash
  tls: {}, // Ative TLS para conexões seguras
})

export default redis
