import { User } from '../graphql_types'

const Query = {
  me: async (_, __, { prisma }): Promise<User> => {
    const [user] = await prisma.users()

    return user
  }
}

export default { Query }