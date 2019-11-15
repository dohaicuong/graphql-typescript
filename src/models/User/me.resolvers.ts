import { User } from '../graphql_types'

const Query = {
  me: (): User => {
    return {
      id: '1',
      email: 'beatyshot@gmail.com',
      name: 'Yuki',
    }
  }
}

export default { Query }