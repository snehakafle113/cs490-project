import Status from 'src/components/Status/Status'

export const QUERY = gql`
  query FindStatusById($id: Int!) {
    status: status(id: $id) {
      id
      status_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Status not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ status }) => {
  return <Status status={status} />
}
