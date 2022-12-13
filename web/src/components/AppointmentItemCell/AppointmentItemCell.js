import * as React from 'react'

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
export const QUERY = gql`
  query FindAppointments($user_id: String!) {
    appointments(user_id: $user_id) {
      id
      summary
      description
      start
      end
      user_id
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

export function mapData(appointments) {
  const events = appointments.map((item) => {
    const start = item.start.dateTime || item.start.date
    const end = item.end.dateTime || item.end.date
    const event = {
      summary: item.summary,
      description: item.description,
      start: start,
      end: end,
    }

    return event
  })
  return events
}
export const Success = ({ appointments }) => {
  return (
    <div>
      <Box w="45%">
        <TableContainer>
          <Table variant="striped">
            <TableCaption>Table of Appointments</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Start</Th>
                <Th>End</Th>
              </Tr>
            </Thead>
            <Tbody>
              {appointments.map((item) => {
                const event = {
                  summary: item.summary,
                  description: item.description,
                  start: item.start,
                  end: item.end,
                }
                mapData(appointments)
                return (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.summary}</Td>
                    <Td>{item.start}</Td>
                    <Td>{item.user_id}</Td>
                    <Td>{item.end}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}
