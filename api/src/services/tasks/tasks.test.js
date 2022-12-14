import { tasks, task, createTask, updateTask, deleteTask } from './tasks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tasks', () => {
  scenario('returns all tasks', async (scenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario) => {
    const result = await createTask({
      input: {
        title: 'Do the program assignment',
        user_id: '3',
        status_id: scenario.task.two.status_id,
        urgency: 'A',
        priority: 2,
        date: '2022-12-10T04:28:46.587Z',
      },
    })

    expect(result.title).toEqual('Do the program assignment')
    expect(result.user_id).toEqual('3')
    expect(result.status_id).toEqual(scenario.task.two.status_id)
    expect(result.urgency).toEqual('A')
    expect(result.priority).toEqual(2)
    expect(result.date).toEqual(new Date('2022-12-10T04:28:46.587Z'))
  })

  scenario('updates a task', async (scenario) => {
    const original = await task({ id: scenario.task.one.id })
    const result = await updateTask({
      id: original.id,
      input: { title: 'Task 2' },
    })

    expect(result.title).toEqual('Task 2')
  })

  scenario('deletes a task', async (scenario) => {
    const original = await deleteTask({ id: scenario.task.one.id })
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
