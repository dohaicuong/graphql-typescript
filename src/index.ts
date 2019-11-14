import { ApolloServer } from 'apollo-server'
import options from './server'
import { GRAPHQL_PORT } from './configs'

const server = new ApolloServer({
  ...options,
  cors: false,
  onHealthCheck: () => {
    return new Promise((resolve, reject) => {
      if (true) resolve()

      reject()
    })
  },
})

server
  .listen(GRAPHQL_PORT)
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    console.log(`🚀  Health check at ${url}.well-known/apollo/server-health`)
  })