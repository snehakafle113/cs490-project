import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Center,
} from '@chakra-ui/react'
import { Button, useDisclosure, Input } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import AppointmentItemCell from '../AppointmentItemCell'
import NewTask from '../Task/NewTask'
import TasksCell from '../Task/TasksCell'
var uid = ''
const TaskView = () => {
  const { isAuthenticated, currentUser } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  if (isAuthenticated) {
    uid = currentUser.uid
  }
  const today = new Date()
  const day = today.toISOString()
  const [date, setDate] = useState(day.substring(0,10));
  const dateChange = (event) => setDate(event.target.value)
  console.log(date)
  return (
    <div>
      <Center>
        <Box w="25%" marginBottom={3}>
          <Flex>
            <Button marginRight={3} bg='#26619C' color='white'> prev </Button>
            <Input
              value={date}
              size='sm'
              type="date"
              bg='white'
              color='black'
              marginRight={1}
              marginTop={1}
              onChange={dateChange}
            />
            <Button
              size='sm'
              bg='#26619C'
              color='white'
              marginTop={1}
              >
                Go
              </Button>
              <Button marginLeft={3} bg='#26619C' color='white'> next </Button>
          </Flex>
        </Box>
      </Center>
      <Button marginBottom={3} marginLeft={5} onClick={onOpen}>New Task</Button>
      <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
        <TasksCell user_id={uid}></TasksCell>
        <AppointmentItemCell user_id={uid}></AppointmentItemCell>
      </SimpleGrid>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <NewTask />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default TaskView
