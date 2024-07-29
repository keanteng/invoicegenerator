import {
    TableContainer,
    Thead,
    Tr,
    Td,
    Th,
    Table,
    Tbody,
} from '@chakra-ui/react';

export default function Data() {
    return (
        <>
        <TableContainer>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th>Item</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
            </Tr>
            </Thead>
        </Table>
        </TableContainer>
        </>
    )
}