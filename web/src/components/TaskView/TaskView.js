import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

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
  return (
    <view>
      <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
        <TasksCell user_id={uid}></TasksCell>
        <AppointmentItemCell user_id={uid}></AppointmentItemCell>
      </SimpleGrid>
      <Button onClick={onOpen}>New Task</Button>
      <Drawer isOpen={isOpen} onClose={onClose} size={'lg'}>
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
    </view>
  )
}

export default TaskView
