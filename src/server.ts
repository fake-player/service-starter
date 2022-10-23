import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFile } from 'fs/promises'
import { resolvers } from './resolvers'

const createServer = async () => {
  const typeDefs = await readFile('./graphql/schema.graphql', 'utf-8')

  return new ApolloServer<{}>({
    typeDefs,
    resolvers,
  })
}

export const startApolloServer = async ({ port }) => {
  const server = await createServer()

  const { url } = await startStandaloneServer(server, {
    listen: {
      port,
    },
  })

  return { server, url }
}
