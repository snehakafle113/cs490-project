import {
   Box
} from '@chakra-ui/react'
import Logo from 'src/assets/logo.png'
import React from 'react'
const Banner = () => {
  return (
    <Box bg='#26619C' w='100%' p={4} color='white'>
      <p>Enchanting Table</p>
      <div>
        <img src={Logo} alt="image" width="50" height="50"/>
      </div>
    </Box>
  )
}

export default Banner
