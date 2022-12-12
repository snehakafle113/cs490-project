import { Success } from './CalendarViewCell'
import { standard } from './CalendarViewCell.mock'

export const success = (args) => {
  return Success ? <Success {...standard()} {...args} /> : <></>
}

export default { title: 'Cells/CalendarViewCell' }
