// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <TaskView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import TaskView from './TaskView'

export const generated = () => {
  return <TaskView />
}

export default {
  title: 'Components/TaskView',
  component: TaskView,
}
