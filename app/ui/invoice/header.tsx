import {
    Heading,
    Grid,
    GridItem,
    Image,
    Text,
} from '@chakra-ui/react'

export default function Header() {
    const companyName = 'Acme Corporation'
    const companyAddressLine1 = '123 Main St.'
    const companyAddressLine2 = 'Springfield, IL 62701'
    const companyPhone = '123-456-7890'
    const companyEmail = 'abc@gmail.com'
    const companyRegistration = '1234567890'
    const invoiceNumber = 'INV-0001'
    const date = '01/01/2022'
    const dueDate = '01/02/2022'
    const page = '1'

    return (
        <>
        <Grid templateColumns='repeat(4, 1fr)' marginTop={2}>

        <GridItem colSpan={2}>
            <Grid templateColumns='repeat(4, 1fr)' marginTop={2}>
                <GridItem colSpan={1}>
                    <Image src='favicon.ico' boxSize='80px' alt='Company Logo' marginLeft={2} />
                </GridItem>

                <GridItem colSpan={3}>
                    <Heading size='lg'>{companyName}</Heading>
                    <Text><b>Registration: </b>{companyRegistration}</Text>
                    <Text>{companyAddressLine1}</Text>
                    <Text>{companyAddressLine2}</Text>
                    <Text><b>Phone: </b>{companyPhone}<b> Email: </b>{companyEmail}</Text>
                </GridItem>
            </Grid>
        </GridItem>

        <GridItem colSpan={3} colEnd={7} marginTop={2}>
            <Text><b>TAX INVOICE</b></Text>
            <Text><b>Invoice Number: </b>{invoiceNumber}</Text>
            <Text><b>Date: </b>{date}</Text>
            <Text><b>Due Date: </b>{dueDate}</Text>
            <Text><b>Page: </b>{page}</Text>
        </GridItem>

        </Grid>
        </>
    )
}