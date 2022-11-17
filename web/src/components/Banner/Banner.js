import {
   Box
} from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box bg='#26619C' w='100%' p={4} color='white'>
      <p>EnchantingTable</p>
      <Image src={/assets/logo.png}/>
    </Box>
  )
}

export default Banner
