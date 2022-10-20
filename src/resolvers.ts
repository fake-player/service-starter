import { DateTimeResolver } from 'graphql-scalars'
import { example } from './resolvers/query/example'
import { Resolvers } from './__generated__/graphql'

export const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    example,
  },
}
