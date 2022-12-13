// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import CalendarViewCell from 'src/components/CalendarViewCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Tabs>
        <TabList>
          <Text fontWeight="extrabold" mt='2'>
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
