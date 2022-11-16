import {
  statuses,
  status,
  createStatus,
  updateStatus,
  deleteStatus,
} from './statuses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('statuses', () => {
  scenario('returns all statuses', async (scenario) => {
    const result = await statuses()

    expect(result.length).toEqual(Object.keys(scenario.status).length)
  })

  scenario('returns a single status', async (scenario) => {
    const result = await status({ id: scenario.status.one.id })

    expect(result).toEqual(scenario.status.one)
  })

  scenario('creates a status', async () => {
    const result = await createStatus({
      input: { status_name: 'String' },
    })

    expect(result.status_name).toEqual('String')
  })

  scenario('updates a status', async (scenario) => {
    const original = await status({ id: scenario.status.one.id })
    const result = await updateStatus({
      id: original.id,
      input: { status_name: 'String2' },
    })

    expect(result.status_name).toEqual('String2')
  })

  scenario('deletes a status', async (scenario) => {
    const original = await deleteStatus({
      id: scenario.status.one.id,
    })
    const result = await status({ id: original.id })

    expect(result).toEqual(null)
  })
})
