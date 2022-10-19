import { prisma } from '../../prisma'
import { QueryResolvers } from '../../__generated__/graphql'

type Resolver = QueryResolvers['example']

export const example: Resolver = async () => {
  let example = await prisma.example.findFirst()

  if (!example) {
    example = await prisma.example.create({ data: {} })
  }

  return example
}
