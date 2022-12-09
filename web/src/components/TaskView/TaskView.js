import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'

import NewTask from '../Task/NewTask'
import TasksCell from '../Task/TasksCell'

const TaskView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <view>
      <div>
        <TasksCell />
      </div>

      <Button onClick={onOpen}>New Task</Button>
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
    </view>
  )
}

export default TaskView
