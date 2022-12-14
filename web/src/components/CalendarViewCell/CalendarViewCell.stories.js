import { Success, Failure } from './CalendarViewCell'
import { standard } from './CalendarViewCell.mock'

export const failure = () => {
  return Failure ? <Failure /> : <></>
}
export const success = (args) => {
  return Success ? <Success {...standard()} {...args} /> : <></>
}

export default { title: 'Cells/CalendarViewCell' }
