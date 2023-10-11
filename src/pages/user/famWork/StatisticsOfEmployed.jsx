import { ChakraProvider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const StatisticsOfEmployed = () => {

    const vacData = [
        { id: 1, name: 'დასახელება1', type: 'ტიპი1', applicant: 'აპლიკანტი 1', date: '10-11-2014', pdf: '/dummy.pdf' },
        { id: 2, name: 'დასახელება2', type: 'ტიპი2', applicant: 'აპლიკანტი 2', date: '10-11-2014', pdf: '/dummy.pdf' },
        { id: 3, name: 'დასახელება3', type: 'ტიპი3', applicant: 'აპლიკანტი 3', date: '10-11-2014', pdf: '/dummy.pdf' }
    ]
    const { t } = useTranslation();
    return (
        <ChakraProvider>
            <TableContainer className='w-100'>
                <Table variant={'striped'} >
                    {/* Table headers */}
                    <Thead>
                        <Tr>
                            <Th>{t('ID')}</Th>
                            <Th>{t('name')}</Th>
                            <Th>{t('type')}</Th>
                            <Th>{t('applicant')}</Th>
                            <Th>{t('CV')}</Th>
                            <Th>{t('date')}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {vacData.map((vac, index) => (
                            <Tr key={vac.id}>
                                <Td>{vac.id}</Td>
                                <Td>{vac.name}</Td>
                                <Td>{vac.type}</Td>
                                <Td>{vac.applicant}</Td>
                                <Td>{vac.date}</Td>
                                <Td><Link target='_blank' download to={vac.pdf}>რეზიუმე</Link></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </ChakraProvider>
    )
}

export default StatisticsOfEmployed