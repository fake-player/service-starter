import { startStandaloneServer } from '@apollo/server/standalone'
import { createServer } from './server'

async function startApolloServer() {
  const server = await createServer()

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀  Server ready at ${url}`)
}

startApolloServer()
