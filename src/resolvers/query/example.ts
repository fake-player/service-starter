import { prisma } from '../../prisma'

export const example = async () => {
  let example = await prisma.example.findFirst()

  if (!example) {
    example = await prisma.example.create({ data: {} })
  }

  return example
}
