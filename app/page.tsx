import Nav from '@/app/ui/nav'

import Footer from './ui/invoice/footer'
import Logistic from './ui/invoice/logistic'
import Header from './ui/invoice/header'
import Data from './ui/invoice/data'
import { 
  Heading, 
  Flex,
  Text,
  Container,
  Box,
  Wrap,
  WrapItem,
  Center
} from '@chakra-ui/react'

export default function Page() {
    return (
      <main>
        <div>
          <Nav />
        </div>
        
        <Box m={5}>
          <Heading>🖨️Invoice Generator</Heading>
          <Text fontSize='lg'>The most advanced invoice production software</Text>
        </Box>

        <Flex m={5} borderWidth='2px' borderRadius='3px'>
          <Box m={2}>
            <Header />
            <Logistic />
            <Data />
            <Footer />
          </Box>
        </Flex>
      </main>
    )
}