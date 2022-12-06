import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center, Button } from '@chakra-ui/react'
//import TaskView from '../../components/Task'
import CalendarView from '../../components/calendarView'
import { Text } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'

const HomePage = () => {

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Tabs>
        <TabList>
          <Text fontWeight="extrabold" mt='2'>Planner</Text>
          <Tab>Calendar</Tab>
          <Tab>Tasks</Tab>
        </TabList>
      <TabPanels>
        <TabPanel>
          <Center>
              <Box w="85%">
                <CalendarView/>
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