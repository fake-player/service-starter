import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs'
import { resolvers } from './resolvers'

const typeDefs = readFileSync('./graphql/schema.graphql', 'utf-8')

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀  Server ready at ${url}`)
}

startApolloServer()
