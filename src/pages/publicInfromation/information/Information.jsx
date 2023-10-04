import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChakraProvider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const statsData = [
    { id: 1, name: 'ინფორმაცია N1', date: '12.01.2021' },
    { id: 2, name: 'ინფორმაცია N2', date: '21.02.2021' },
    { id: 3, name: 'ინფორმაცია N3', date: '21.03.2021' },
    { id: 4, name: 'ინფორმაცია N4', date: '21.04.2021' }
]
const Information = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs></Breadcrumbs>
            <ChakraProvider>
                <TableContainer>
                    <Table variant={'striped'} >
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>{t('name')}</Th>
                                <Th>{t('date')}</Th>
                                <Th>{t('download')}</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {statsData.map((file) => (
                                <Tr key={file.id}>
                                    <Td>{file.id}</Td>
                                    <Td><Link to={"/dummy.pdf"} target="_blank" download>{file.name}</Link></Td>
                                    <Td>{file.date}</Td>
                                    <Td><Link to={"/dummy.pdf"} target="_blank" download>გადმოწერა</Link></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </ChakraProvider>
        </Container>

    )
}

export default Information