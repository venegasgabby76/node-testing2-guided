it('is the correct env', () => {
  expect(process.env.DB_ENV)
    .toBe('testing')
})

const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

const frodo = { name: 'frodo' }
const sam = { name: 'sam' }

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('hobbits').truncate()
})
afterAll(async () => {
  await db.destroy()
})

describe('Hobbits model', () => {
  describe('insert function', () => {
    it('adds hobbits to db', async () => {
      let all
      await Hobbit.insert(frodo)
      all = await db('hobbits')
      expect(all).toHaveLength(1)

      await Hobbit.insert(sam)
      all = await db('hobbits')
      expect(all).toHaveLength(2)
    })
    it('resolves to the hobbit', async() => {
      const hobbit = await Hobbit.insert(frodo)
      expect(hobbit).toMatchObject({ id: 1, ...frodo })
    })
  })
  describe('update function', () => {
    it('updates the hobbit', async () => {
      // ?
      // using db, get a hobbit in the database
      await Hobbit.insert(sam)
      // await for the update of said hobbit
      // using db, retrieve the hobbit
      // check the change took
    })
    it('resolves to the updated hobbit', () => {
      // ?
      // using db, get a hobbit in the database
      // await for the update of said hobbit save in var
      // check that the var contains h with the updates
    })
  })
})
