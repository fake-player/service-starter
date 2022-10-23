import { startStandaloneServer } from '@apollo/server/standalone'
import { createServer } from './server'
import { port } from './config/config.json'

async function startApolloServer() {
  const server = await createServer()

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  })

  console.log(`🚀  Server ready at ${url}`)
}

startApolloServer()
