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

import AppointmentsCell from '../Appointment/AppointmentsCell'
import NewTask from '../Task/NewTask'
import TasksCell from '../Task/TasksCell'

const TaskView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <view>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <TasksCell />
        <AppointmentsCell />
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
