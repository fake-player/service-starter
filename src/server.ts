import { ApolloServer } from '@apollo/server'
import { readFile } from 'fs/promises'
import { resolvers } from './resolvers'

export const createServer = async () => {
  const typeDefs = await readFile('./graphql/schema.graphql', 'utf-8')

  return new ApolloServer({
    typeDefs,
    resolvers,
  })
}
