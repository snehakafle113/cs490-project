import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_STATUS_MUTATION = gql`
  mutation DeleteStatusMutation($id: Int!) {
    deleteStatus(id: $id) {
      id
    }
  }
`

const Status = ({ status }) => {
  const [deleteStatus] = useMutation(DELETE_STATUS_MUTATION, {
    onCompleted: () => {
      toast.success('Status deleted')
      navigate(routes.statuses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete status ' + id + '?')) {
      deleteStatus({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Status {status.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{status.id}</td>
            </tr>
            <tr>
              <th>Status name</th>
              <td>{status.status_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStatus({ id: status.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(status.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Status
