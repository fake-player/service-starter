import { query } from '../../test-util'

test('example', async () => {
  const { body } = await query(`#graphql
    {
      example {
        id
      }
    }
  `)
  expect(body.errors).toBeUndefined()
  expect(body.data.example.id).toBeString()
  expect(body.data.example.id).not.toBeEmpty()
})
