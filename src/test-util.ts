import request from 'supertest'
import { startApolloServer } from './server'

let serverUrl

export const startServer = async () => {
  const { server, url } = await startApolloServer({ port: 0 })

  serverUrl = url

  return { server, url }
}

export const query = (query: string, variables?) => {
  const data = {
    query,
    variables,
  }
  return request(serverUrl).post('/').send(data)
}
