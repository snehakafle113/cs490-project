import { Link, routes } from '@redwoodjs/router'

import Tasks from 'src/components/Task/Tasks'

export const QUERY = gql`
  query FindTasks {
    tasks {
      id
      created_at
      title
      user_id
      status_id
      urgency
      priority
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tasks yet. '}
        {'Create one?'}
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tasks }) => {
  return <Tasks tasks={tasks} />
}
