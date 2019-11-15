import { QueryResolvers, User } from '../graphql_types'

const Query: QueryResolvers = {
  me: (): User => {
    return {
      id: '1',
      email: 'beatyshot@gmail.com',
      name: 'Yuki',
    }
  }
}

export default { Query }