import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { InputLabel, NativeSelect } from '@mui/material'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Input } from '@mui/base'
import Pagination from '../../../ReusableComponents/CardsWrap/Paginated/Pagination'
import { ChakraProvider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
const vacData = [
  { id: 1, name: 'დასახელება1', type: 'ტიპი1', employer: 'დამსაქმებელი 1', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 2, name: 'დასახელება2', type: 'ტიპი2', employer: 'დამსაქმებელი 2', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 3, name: 'დასახელება3', type: 'ტიპი3', employer: 'დამსაქმებელი 3', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 4, name: 'დასახელება4', type: 'ტიპი4', employer: 'დამსაქმებელი 4', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 5, name: 'დასახელება5', type: 'ტიპი5', employer: 'დამსაქმებელი 5', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' }
]
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const itemsPerPage = 5;
const colors = ['success', 'danger', 'info', 'warning']
const MyVacancies = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vacData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <Container className='stats_container myVacancies' style={{ backgroundColor: '#fff', padding: 20 }}>
      <div className="filter">
        <ReactSelect
          isMulti
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          isSearchable={false}
          placeholder="აირჩიეთ ტიპი"
        />
        <div className='dateElements'>
          <Input type='date' />
          <InputLabel>
            -დან
          </InputLabel>
        </div>
        <div className='dateElements'>
          <Input type='date' />
          <InputLabel>
            -მდე
          </InputLabel>
        </div>
        <button>ფილტრი</button>
      </div>
      <div className='sortAmount_filter'>
        <div className='amount_wrapper'>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'filterAmount',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </NativeSelect>
        </div>
        <div className='sort_wrapper'>
          <InputLabel>
            სორტირება
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'sort',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>ID</option>
            <option value={20}>სახელი</option>
            <option value={30}>ტიპი</option>
            <option value={40}>დამსაქმებელი</option>
            <option value={50}>მუნიციპალიტეტი</option>
            <option value={60}>ვადა</option>
            <option value={70}>თარიღი</option>
          </NativeSelect>
        </div>

      </div>
      <ChakraProvider>
        <TableContainer>
          <Table striped responsive>
            <Thead>
              <Tr>
                <Th>{t('ID')}</Th>
                <Th>{t('name')}</Th>
                <Th>{t('type')}</Th>
                <Th>{t('employer')}</Th>
                <Th>{t('municipality')}</Th>
                <Th>{t('date')}</Th>
                <Th>{t('deadline')}</Th>
                <Th>{t('შედეგი')}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map((vac) => (
                <Tr key={vac.id}>
                  <Td>{vac.id}</Td>
                  <Td><Link to={`/vacancy/${vac.id}`} target="_blank" >{vac.name}</Link></Td>
                  <Td>{vac.type}</Td>
                  <Td>{vac.employer}</Td>
                  <Td>{vac.municipality}</Td>
                  <Td>{vac.date}</Td>
                  <Td>{vac.deadline}</Td>
                  <Td><div className={`bg-${colors[vac.id - 1] ? colors[vac.id - 1] : 'primary'} text-white`} style={{ padding: 5, borderRadius: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>ტექსტი <i className='fa-solid fa-check' /></div></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination
            totalPosts={vacData.length}
            postsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </TableContainer>
      </ChakraProvider>
    </Container>
  )
}

export default MyVacancies