// further create page and export a React component

import Nav from '@/app/ui/nav'
import {
    Heading,
    Text,
    Box,
    Center
} from '@chakra-ui/react'

export default function Page() {
    return (
        <>
        <Nav />

        <Box m={5}>
          <Heading>About</Heading>
          <Text fontSize='lg'>
            This is a simple app that generates invoices for you. 
            It is built using Next.js and Chakra UI.
          </Text>
        </Box>
        </>
    )
}