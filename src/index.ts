import { port } from './config/config.json'
import { startApolloServer } from './server'

async function startServer() {
  const { url } = await startApolloServer({ port })

  console.log(`🚀  Server ready at ${url}`)
}

startServer()
