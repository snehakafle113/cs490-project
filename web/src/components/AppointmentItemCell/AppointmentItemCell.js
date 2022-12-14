import * as React from 'react'

import { Box, Text } from '@chakra-ui/react'

export const QUERY = gql`
  query FindAppointmentItemQuery($id: Int!) {
    appointmentItem: appointments(id: $id) {
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

export const Success = ({ appointmentItem }) => {
  return (
    <div>
      <Box
        p="5"
        maxW="320px"
        height={(appointmentItem.duration * 5) / 3}
        borderWidth="1px"
      >
        <Text fontSize="l" fontWeight="semibold" lineHeight="short">
          {appointmentItem.title}
        </Text>
        <Text mt={2}>
          {Math.floor(appointmentItem.duration / 60)}h{' '}
          {appointmentItem.duration % 60}m
        </Text>
      </Box>
    </div>
  )
}
