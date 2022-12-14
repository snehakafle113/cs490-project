export const standard = defineScenario({
  task: {
    one: {
      data: {
        title: 'Complete the semester project',
        user_id: '1',
        urgency: 'A',
        priority: 1,
        date: '2022-12-12T04:28:46.604Z',
        status: { create: { status_name: 'Not completed' } },
      },
    },
    two: {
      data: {
        title: 'Finish the essay',
        user_id: '2',
        urgency: 'A',
        priority: 2,
        date: '2022-12-13T04:28:46.604Z',
        status: { create: { status_name: 'Not completed' } },
      },
    },
  },
})
