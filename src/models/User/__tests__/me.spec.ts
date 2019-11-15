import resolvers from '../resolvers'

describe('User model', () => {
  it('return me user', async () => {
    const prisma = {
      users: () => new Promise(resolve => {
        resolve([
          { id: '1' }
        ])
      })
    }

    const res = await resolvers.Query.me(null, null, { prisma })
    expect(res).toHaveProperty('id')
  })
})