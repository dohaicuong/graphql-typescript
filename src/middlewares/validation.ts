import * as yup from 'yup'
import { UserInputError } from 'apollo-server'

export default {
  Mutation: async (resolve, _, args, ctx, info) => {
    const { validate: validationSchema } = info.schema.getMutationType().getFields()[info.fieldName]
    if (validationSchema) {
      await validationSchema.validate(args, { abortEarly: false })
        .catch(error => {
          if (!(error instanceof yup.ValidationError)) throw error

          const errors = getErrorsFromYup(error)
          throw new UserInputError('Arguments invalid', {
            invalidArgs: errors
          })
          // InputValidationError(info.fieldName, errors, ctx.response)
        })
    }

    return resolve(_, args, ctx, info)
  }
}

const getErrorsFromYup = error => error.inner.reduce((total, current) => {
  const [root, key] = current.path.split('.')
  if (!total[root]) total[root] = {}

  total[root][key] = current.message.replace(`${current.path} `, '')

  return total
}, {})