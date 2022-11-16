import { Link, routes } from '@redwoodjs/router'

import Statuses from 'src/components/Status/Statuses'

export const QUERY = gql`
  query FindStatuses {
    statuses {
      id
      status_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No statuses yet. '}
      <Link to={routes.newStatus()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ statuses }) => {
  return <Statuses statuses={statuses} />
}
