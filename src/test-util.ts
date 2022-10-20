import { startStandaloneServer } from '@apollo/server/standalone'
import request from 'supertest'
import { createServer } from './server'

let serverUrl

export const startServer = async () => {
  const server = await createServer()
  const options = {
    listen: { port: 0 },
  }
  const { url } = await startStandaloneServer(server, options)

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
