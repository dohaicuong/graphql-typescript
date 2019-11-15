import { MutationResolvers, AuthPayload } from '../graphql_types'
import * as yup from 'yup'

const Mutation = {
  signup: {
    validate: yup.object().shape({
      data: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required()
      })
    }),
    resolve: (_, args): AuthPayload => {
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
}

export default { Mutation }