import { typeDefs, resolvers } from './models'
import context from './context'

import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'apollo-server'

import validationMiddleware from './middlewares/validation'

const schema = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers }),
  validationMiddleware
)

const options = {
  schema,
  context,
}

export default options