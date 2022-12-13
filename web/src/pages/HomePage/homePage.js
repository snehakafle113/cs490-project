// // import { Link, routes } from '@redwoodjs/router'
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

import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

//import TaskView from '../../components/Task'
import CalendarView from '../../components/calendarView'
import { Text, Input } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <>
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
