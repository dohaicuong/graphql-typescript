import { ApolloServer } from 'apollo-server'
import options from './server'
// import { GRAPHQL_PORT } from './configs'

const server = new ApolloServer(options)
server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    console.log(`🚀  Health check at ${url}.well-known/apollo/server-health`)
  })