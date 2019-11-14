import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const typesContext = require.context('.', true, /.*\.graphql$/)
const types = typesContext.keys().map(module => typesContext(module))
export const typeDefs = mergeTypes(types, { all: true })

// import userTypes from './User/types.graphql'
// import postTypes from './Post/types.graphql'
// export const typeDefs = mergeTypes([userTypes, postTypes], { all: true })

const resolversContext = require.context('.', true, /.*\.ts$/)
export const resolvers = mergeResolvers(resolversContext.keys()
  .filter(x => {
    const isTest = (x.indexOf('.spec.') !== -1 || x.indexOf('.test.') !== -1)
    return !isTest
  })
  .map(module => resolversContext(module).default))

// import userResolvers from './User/resolvers'
// import postResolvers from './Post/resolvers'
// export const resolvers = mergeResolvers([userResolvers, postResolvers])