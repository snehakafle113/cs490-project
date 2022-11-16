import Task from 'src/components/Task/Task'

export const QUERY = gql`
  query FindTaskById($id: Int!) {
    task: task(id: $id) {
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

export const Empty = () => <div>Task not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ task }) => {
  return <Task task={task} />
}
