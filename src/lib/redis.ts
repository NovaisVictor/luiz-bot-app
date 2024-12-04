import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://assured-guinea-25510.upstash.io',
  token: 'AWOmAAIjcDFjZDY1NDYyZGM5NmI0MjYzYTEzMDU5OTMxNWU3MTljNHAxMA',
})

export default redis
