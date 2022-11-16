import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StatusForm from 'src/components/Status/StatusForm'

export const QUERY = gql`
  query EditStatusById($id: Int!) {
    status: status(id: $id) {
      id
      status_name
    }
  }
`
const UPDATE_STATUS_MUTATION = gql`
  mutation UpdateStatusMutation($id: Int!, $input: UpdateStatusInput!) {
    updateStatus(id: $id, input: $input) {
      id
      status_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ status }) => {
  const [updateStatus, { loading, error }] = useMutation(
    UPDATE_STATUS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Status updated')
        navigate(routes.statuses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateStatus({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Status {status?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StatusForm
          status={status}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
