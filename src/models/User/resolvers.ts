import { User } from '../graphql_types'

const Query = {
  me: (): User => {
    return {
      id: '1',
      email: 'beatyshot@gmail.com',
      password: 'here',
      name: 'Yuki',
    }
  }
}

export default { Query }