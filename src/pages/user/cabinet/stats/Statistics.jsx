import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Input } from '@mui/base'
import { InputLabel, NativeSelect, Popover } from '@mui/material'
import './stats.scss'
import Pagination from '../../../../ReusableComponents/CardsWrap/Paginated/Pagination'
import { ChakraProvider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
const vacData = [
  { id: 1, name: 'დასახელება1', type: 'ტიპი1', employer: 'დამსაქმებელი 1', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 2, name: 'დასახელება2', type: 'ტიპი2', employer: 'დამსაქმებელი 2', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 3, name: 'დასახელება3', type: 'ტიპი3', employer: 'დამსაქმებელი 3', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 4, name: 'დასახელება4', type: 'ტიპი4', employer: 'დამსაქმებელი 4', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 5, name: 'დასახელება5', type: 'ტიპი5', employer: 'დამსაქმებელი 5', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 6, name: 'დასახელება4', type: 'ტიპი4', employer: 'დამსაქმებელი 4', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 7, name: 'დასახელება5', type: 'ტიპი5', employer: 'დამსაქმებელი 5', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 8, name: 'დასახელება4', type: 'ტიპი4', employer: 'დამსაქმებელი 4', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 9, name: 'დასახელება5', type: 'ტიპი5', employer: 'დამსაქმებელი 5', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 10, name: 'დასახელება4', type: 'ტიპი4', employer: 'დამსაქმებელი 4', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 11, name: 'დასახელება5', type: 'ტიპი5', employer: 'დამსაქმებელი 5', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' }
]
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const itemsPerPage = 7;
const StatisticsCab = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vacData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <Container className='stats_container' style={{ backgroundColor: '#fff', padding: 20 }}>
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
      <div>
        <ChakraProvider>
          <TableContainer>
            <Table variant={'striped'}>
              {/* Table headers */}
              <Thead>
                <Tr>
                  <Th>{t('ID')}</Th>
                  <Th>{t('name')}</Th>
                  <Th>{t('type')}</Th>
                  <Th>{t('employer')}</Th>
                  <Th>{t('municipality')}</Th>
                  <Th>{t('deadline')}</Th>
                  <Th>{t('date')}</Th>
                  <Th>{t('result')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentItems.map((vac, index) => (
                  <Tr key={vac.id}>
                    <Td>{vac.id}</Td>
                    <Td><Link to={`/vacancy/${vac.id}`} target="_blank" >{vac.name}</Link></Td>
                    <Td>{vac.type}</Td>
                    <Td>{vac.employer}</Td>
                    <Td>{vac.municipality}</Td>
                    <Td>{vac.deadline}</Td>
                    <Td>{vac.date}</Td>
                    <Td><i style={{ cursor: 'pointer' }} className='fa-solid fa-circle-info' onClick={handleClick} /></Td>
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
      </div>
      <div className="overall_stats">
        <ul>
          <li>მოგეწოდათ ინფორმაცია : 201</li>
          <li>მაძიებლის თანხმობა : 201</li>
          <li>მაძიებლის უარყოფა : 201</li>
          <li>გაიგზავნა რეზიუმე : 201</li>
          <li>გაიგზავნა გასაუბრებაზე : 201</li>
          <li>გამოცხადდა გასაუბრებაზე : 201</li>
          <li>არ გამოცხადდა გასაუბრებაზე : 201</li>
          <li>დასაქმდა : 201</li>
          <li>გამოხატა ინტერესი : 201</li>
        </ul>
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ '.MuiPaper-elevation': { padding: '20px' } }}
      >
        <ul style={{ margin: 0 }}>
          <li>თქვენი ვაკანსია მიღებულია</li>
          <li>რეზიუმე გადაგზავნილია</li>
        </ul>
      </Popover>
    </Container>
  )
}

export default StatisticsCab