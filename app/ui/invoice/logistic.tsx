import {
    Heading,
    Grid,
    GridItem,
    Spacer
} from '@chakra-ui/react'

export default function Logistic() {
    const deliveryAddressLine1 = '123 Main St.'
    const deliveryAddressLine2 = 'Springfield, IL 62701'
    const billingAddressLine1 = '123 Main St.'
    const billingAddressLine2 = 'Springfield, IL 62701'
    const shippingAddressLine1 = '123 Main St.'
    const shippingAddressLine2 = 'Springfield, IL 62701'

    return (
        <>
        <Grid templateColumns='repeat(5, 1fr)' marginTop={6}>
        <GridItem colSpan={2}>
            <Heading size='md' marginBottom={2}>Delivery & Billing</Heading>
            
            <Grid templateColumns='repeat(5, 1fr)' marginTop={2}>
                <GridItem colStart={1} colEnd={3}>
                    <Heading size='xs' marginBottom={1}>Delivery Address:</Heading>
                    <p>{billingAddressLine1}</p>
                    <p>{billingAddressLine2}</p>
                </GridItem>

                <GridItem colStart={4} colEnd={6}>
                    <Heading size='xs' marginBottom={1}>Billing Address:</Heading>
                    <p>{deliveryAddressLine1}</p>
                    <p>{deliveryAddressLine2}</p>
                </GridItem>
            </Grid>
        </GridItem>

        <GridItem colStart={4} colEnd={6}>
            <Heading size='md' marginBottom={6}>Ship To:</Heading>
            <p>{shippingAddressLine1}</p>
            <p>{shippingAddressLine2}</p>
        </GridItem>
        </Grid>
        </>
    )
}