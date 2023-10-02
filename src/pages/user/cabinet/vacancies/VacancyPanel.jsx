import { Checkbox, FormControlLabel, Input, NativeSelect } from '@mui/material'
import React from 'react'
import ReactSelect from 'react-select'
import './vacancies.scss'
import { FormControl } from 'react-bootstrap'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import { ChakraProvider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const vacData = [
    { id: 1, name: 'დასახელება1', type: 'ტიპი1', employer: 'დამსაქმებელი 1', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
    { id: 2, name: 'დასახელება2', type: 'ტიპი2', employer: 'დამსაქმებელი 2', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
    { id: 3, name: 'დასახელება3', type: 'ტიპი3', employer: 'დამსაქმებელი 3', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' }
]
const VacancyPanel = () => {
    return (
        <div className='vacancyPanel_wrapper'>
            <div className="vacancyPanel_search">
                <div className='vacancyPanel_filter'>
                    <ReactSelect
                        isMulti
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder='ვაკანსიის ტიპი'
                    />
                </div>
                <div className='vacancyPanel_filter'>
                    <ReactSelect
                        isMulti
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="აირჩიეთ მუნიციპალიტეტი"
                    />
                </div>
                <div className='vacancyPanel_filter'>
                    <ReactSelect
                        isMulti
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder='აირჩიეთ განაკვეთი'
                    />
                </div>
                <div className='vacancyPanel_filter'>
                    <FormControl placeholder='აირჩიეთ პოზიცია' />
                </div>
                <div className='vacancyPanel_filter'>
                    <FormControl placeholder='ID' />
                </div>
                <div className='vacancyPanel_filter'>
                    <ReactSelect
                        isMulti
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="აირჩიეთ სფერო"
                    />
                </div>
                <div className='vacancyPanel_filter'>
                    <NativeSelect>
                        <option value={0}>სამუშაო პერიოდი</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </NativeSelect>
                </div>
                <div className='vacancyPanel_filter'>
                    <NativeSelect>
                        <option value={0}>აირჩიეთ კომპანია</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </NativeSelect>
                </div>
                <div className='vacancyPanel_filter'>
                    <FormControl placeholder='პოზიციის დასახელება' />
                </div>
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label={'ანაზღაურება'}
                    sx={{ width: "40%" }}
                />
            </div>
            <div className="vacancyPanel_body">
                <ChakraProvider>
                    <TableContainer>
                        <Table variant={'striped'}>
                            <Thead>
                                <Tr>
                                    <Th>{t('ID')}</Th>
                                    <Th>{t('name')}</Th>
                                    <Th>{t('type')}</Th>
                                    <Th>{t('employer')}</Th>
                                    <Th>{t('municipality')}</Th>
                                    <Th>{t('date')}</Th>
                                    <Th>{t('deadline')}</Th>
                                    <Th>{t('sphere')}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {vacData.map((vac) => (
                                    <Tr key={vac.id}>
                                        <Td>{vac.id}</Td>
                                        <Td><Link to={`/vacancy/${vac.id}`} target="_blank" >{vac.name}</Link></Td>
                                        <Td>{vac.type}</Td>
                                        <Td>{vac.employer}</Td>
                                        <Td>{vac.municipality}</Td>
                                        <Td>{vac.date}</Td>
                                        <Td>{vac.deadline}</Td>
                                        <Td>{vac.sphere}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ChakraProvider>
            </div>
        </div>
    )
}

export default VacancyPanel