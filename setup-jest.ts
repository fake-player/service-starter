import { ApolloServer } from '@apollo/server'
import 'jest-extended/all'
import { startServer } from './src/test-util'

let server: ApolloServer

beforeAll(async () => {
  ;({ server } = await startServer())
})

afterAll(() => server.stop())
