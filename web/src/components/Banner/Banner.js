import {
  Box,
  HStack,
  Flex,
  Spacer,
  Text,
  Icon,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react'
import { BsPersonBadge, } from 'react-icons/bs'
import { CalendarIcon, SettingsIcon, LockIcon, } from '@chakra-ui/icons'
import Logo from 'src/assets/logo.png'
import React from 'react'
import { useAuth } from '@redwoodjs/auth'

const Banner = () => {
 const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()
 return (
   <Box bg='#26619C' w='100%' p={4} color='white'>
     <Flex>
       <HStack spacing = '17px'>
         <Box>
           <img src={Logo} alt="image" width="50" height="50"/>
           </Box>
         <Box>
           <Text fontsize='4xl' as='b'>EnchantingTable</Text>
         </Box>
       </HStack>
       <Spacer />
       <HStack spacing = '17px'>
       <Button leftIcon={<CalendarIcon />} variant='outline'>
         Home
       </Button>
         <Button leftIcon={<SettingsIcon />}  variant='outline'>
           Profile
         </Button>
         <Button
           leftIcon={<LockIcon />}
           onClick={async () => {
             if (isAuthenticated) {
               await logOut()
             } else {
               await logIn()
             }
           }}
           variant='outline'
         >
         {isAuthenticated ? currentUser.uid : 'Sign in'}
         </Button>
         </HStack>
     </Flex>
   </Box>
 )
}

export default Banner
