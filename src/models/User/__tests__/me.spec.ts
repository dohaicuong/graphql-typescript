import resolvers from '../me.resolvers'

describe('User model', () => {
  it('return me user', async () => {
    const res = await resolvers.Query.me()
    expect(res).toHaveProperty('id')
  })
})