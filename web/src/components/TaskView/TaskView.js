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

import AppointmentItemCell from '../AppointmentItemCell'
import AppointmentListsCell from '../AppointmentListsCell'
import NewTask from '../Task/NewTask'
import TasksCell from '../Task/TasksCell'

const TaskView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()
  return (
    <view>
      <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
        <TasksCell />
        {currentUser === null ? (
          <AppointmentListsCell user_id={'1111'}></AppointmentListsCell>
        ) : (
          <AppointmentListsCell
            user_id={currentUser.uid}
          ></AppointmentListsCell>
        )}
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
