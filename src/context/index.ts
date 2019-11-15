import { prisma } from './prisma-client'

export default req => {
  return {
    ...req,
    prisma
  }
}