import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Center,
  Flex,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import AuthorizeCell from 'src/components/AuthorizeCell'
import TaskView from 'src/components/TaskView'

//import TaskView from '../../components/Task'
import CalendarView from '../../components/calendarView'
import Calendar from 'src/components/Calendar'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  //const uid = currentUser.uid
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Tabs>
        <TabList>
          <Text fontWeight="extrabold" mt="2">
            Planner
          </Text>
          <Tab>Calender</Tab>
          <Tab>Tasks</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Center>
              <Box w="85%">
                <Calendar />
              </Box>
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Box w="85%">
                <TaskView />
                <></>
              </Box>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <AuthorizeCell user_id={'H4naFqJO3VfzjbPm9bQ3Zc13G8v2	'}></AuthorizeCell>
    </>
  )
}

export default HomePage
