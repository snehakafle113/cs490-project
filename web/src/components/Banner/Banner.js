import {
   Box,
   HStack,
   Flex,
   Spacer,
   Text
} from '@chakra-ui/react'
import Logo from 'src/assets/logo.png'
import React from 'react'
const Banner = () => {
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
          <img src={Logo} alt="image" width="50" height="50"/>
      </Flex>
    </Box>
  )
}

export default Banner
