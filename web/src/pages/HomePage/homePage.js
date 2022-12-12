// import { Link, routes } from '@redwoodjs/router'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Center,
  Button,
} from '@chakra-ui/react'
import { Text, Input } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

//import TaskView from '../../components/Task'
import CalendarView from '../../components/calendarView'

const HomePage = () => {
  const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()

  return (
    <>
      <Button
        onClick={async () => {
          if (isAuthenticated) {
            await logOut()
          } else {
            await logIn()
          }
        }}
      >
        {isAuthenticated ? currentUser.uid : 'Log in'}
      </Button>
      <MetaTags title="Home" description="Home page" />
      <Tabs>
        <TabList>
          <Text fontWeight="extrabold" mt="2">
            Planner
          </Text>
          <Tab>Calendar</Tab>
          <Tab>Tasks</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Center>
              <Box w="85%">
                <CalendarView />
              </Box>
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Box w="85%">
                <></>
              </Box>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default HomePage