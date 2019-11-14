import { typeDefs, resolvers } from './models'

const options = {
  typeDefs,
  resolvers,
  onHealthCheck: () => {
    return new Promise((resolve, reject) => {
      if (true) resolve()

      reject()
    })
  }
}

export default options