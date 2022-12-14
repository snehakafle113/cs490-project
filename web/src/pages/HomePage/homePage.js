import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Center
} from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import TaskView from 'src/components/TaskView'

import { toast, Toaster } from '@redwoodjs/web/toast'

import CalendarViewCell from '../../components/calendarViewCell'

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
                <CalendarViewCell user_id={'1111'}></CalendarViewCell>
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
    </>
  )
}

export default HomePage
