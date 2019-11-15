import { MutationResolvers, AuthPayload } from '../graphql_types'

const Mutation: MutationResolvers = {
  signup: (): AuthPayload => {
    return {
      token: '123',
      user: {
        id: '1',
        email: 'beatyshot@gmail.com',
        name: 'Yuki',
      }
    }
  }
}

export default { Mutation }