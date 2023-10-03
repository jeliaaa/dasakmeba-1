import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './worker.scss'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { ChakraProvider, Table, TableContainer, Tbody, Td, Th, Thead, Tr, extendTheme } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'
const Structure = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    const colors = {
        brand: {
            900: '#asd12f',
            800: '#153e75',
            700: '#2a69ac',
        },
    }

    const theme = extendTheme({ colors })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => console.error(err))

    }, [])

    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs />
            <ChakraProvider theme={theme}>
                <TableContainer>
                    <Table className='structure_table' size='md' variant={'striped'} colorScheme='blackAlpha'>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>{t('agencyStructure')}</Th>
                                <Th>{t('position')}</Th>
                                <Th>{t('nameSurname')} </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(worker => {
                                return (
                                    <Tr key={worker.id}>
                                        <Td>{worker.id}</Td>
                                        <Td>{worker.address.city}</Td>
                                        <Td>{worker.email}</Td>
                                        <Td><Link to={`${worker.id}`}>{worker.name}</Link></Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </ChakraProvider>
        </Container>
    )
}

export default Structure