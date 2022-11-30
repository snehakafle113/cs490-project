import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Status/StatusesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_STATUS_MUTATION = gql`
  mutation DeleteStatusMutation($id: Int!) {
    deleteStatus(id: $id) {
      id
    }
  }
`

const StatusesList = ({ statuses }) => {
  const [deleteStatus] = useMutation(DELETE_STATUS_MUTATION, {
    onCompleted: () => {
      toast.success('Status deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete status ' + id + '?')) {
      deleteStatus({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((status) => (
            <tr key={status.id}>
              <td>{truncate(status.id)}</td>
              <td>{truncate(status.status_name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.status({ id: status.id })}
                    title={'Show status ' + status.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStatus({ id: status.id })}
                    title={'Edit status ' + status.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete status ' + status.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(status.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StatusesList
