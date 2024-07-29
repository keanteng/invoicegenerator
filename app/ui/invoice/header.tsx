import {
    Heading,
    Grid,
    GridItem,
    Box,
    Text
} from '@chakra-ui/react'

export default function Header() {
    const companyName = 'ABC Trading Inc.'

    return (
        <>
        <Heading>{companyName}</Heading>

        <Grid templateColumns='repeat(5, 1fr)' marginTop={6}>
        <GridItem colSpan={2}>
            <Heading size='md' marginBottom={2}>Delivery & Billing</Heading>
            <p>John Doe</p>
            <p>123 Main St.</p>
            <p>Springfield, IL 62701</p>
        </GridItem>
        <GridItem colStart={4} colEnd={6}>
            <Heading size='md' marginBottom={2}>Ship To:</Heading>
            <p>John Doe</p>
            <p>123 Main St.</p>
            <p>Springfield, IL 62701</p>
        </GridItem>
        </Grid>
        </>
    )
}