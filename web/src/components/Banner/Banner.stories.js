// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Banner {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Banner from './Banner'

export const generated = () => {
  return <Banner />
}

export default {
  title: 'Components/Banner',
  component: Banner,
}
