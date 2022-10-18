import { DateTimeResolver } from 'graphql-scalars'
import { example } from './resolvers/query/example'

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    example,
  },
}
