import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Task/TasksCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`
export const Loading = () => (
  <div>
    <Box p="5" maxW="320px" height="100" borderWidth="1px">
      <Text
        style={{ color: 'gray' }}
        fontSize="l"
        fontWeight="semibold"
        lineHeight="short"
      >
        Loading...
      </Text>
    </Box>
  </div>
)

export const Empty = () => (
  <div>
    <Box p="5" maxW="320px" height="100" borderWidth="1px">
      <Text
        style={{ color: 'gray' }}
        fontSize="l"
        fontWeight="semibold"
        lineHeight="short"
      >
        Empty AppointmentItem
      </Text>
    </Box>
  </div>
)

export const Failure = ({ error }) => (
  <div>
    <Box p="5" maxW="320px" height="100" borderWidth="1px">
      <Text
        style={{ color: 'red' }}
        fontSize="l"
        fontWeight="semibold"
        lineHeight="short"
      >
        Failure to load AppointmentItem
      </Text>
    </Box>
  </div>
)
const TasksList = ({ tasks }) => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
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
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <Box w="100%">
        <Th>Tasks</Th>
        <TableContainer>
          <Table variant="striped">
            <TableCaption>Table of Tasks</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>User Id</Th>
                <Th>Status Id</Th>
                <Th>Urgency</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  {
                    //<td>{truncate(task.id)}</td>
                  }
                  <Td>{truncate(task.title)}</Td>
                  {
                    //<td>{timeTag(task.created_at)</td>
                  }
                  {<Td>{truncate(task.user_id)}</Td>}
                  <Td>{truncate(task.status_id)}</Td>
                  <Td>{truncate(task.urgency)}</Td>
                  {
                    //<td>{truncate(task.priority)}</td>
                  }
                  {
                    //<td>{timeTag(task.date)}</td>
                  }
                  <td>
                    <nav className="rw-table-actions">
                      {/*<Link
                    to={routes.task({ id: task.id })}
                    title={'Show task ' + task.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>*/}
                      {/*
                  <Link
                    to={routes.editTask({ id: task.id })}
                    title={'Edit task ' + task.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>*/}
                      <button
                        type="button"
                        title={'Delete task ' + task.id}
                        className="rw-button rw-button-small rw-button-red"
                        onClick={() => onDeleteClick(task.id)}
                      >
                        Delete
                      </button>
                    </nav>
                  </td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      {/*<table className="rw-table">
        <thead>
          <tr>
            {
              //<th>Id</th>
            }
            {
              //<th>Created at</th>
            }
            <th>Title</th>
            {<th>User id</th>}
            <th>Status id</th>
            <th>Urgency</th>
            {
              //<th>Priority</th>
            }

            {
              //<th>Date</th>
            }

            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {
                //<td>{truncate(task.id)}</td>
              }
              <td>{truncate(task.title)}</td>

              {
                //<td>{timeTag(task.created_at)</td>
              }
              {<td>{truncate(task.user_id)}</td>}
              <td>{truncate(task.status_id)}</td>
              <td>{truncate(task.urgency)}</td>
              {
                //<td>{truncate(task.priority)}</td>
              }
              {
                //<td>{timeTag(task.date)}</td>
              }
              <td>
                <nav className="rw-table-actions">
                  {/*<Link
                    to={routes.task({ id: task.id })}
                    title={'Show task ' + task.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>}
      {
                  <Link
                    to={routes.editTask({ id: task.id })}
                    title={'Edit task ' + task.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>}
                  <button
                    type="button"
                    title={'Delete task ' + task.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(task.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
                </table>
                }*/}
    </div>
  )
}

export default TasksList
