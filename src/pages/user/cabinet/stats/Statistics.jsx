import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Input } from '@mui/base'
import { InputLabel, Popover, Typography } from '@mui/material'
import './stats.scss'
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
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
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
      <Table responsive>
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('name')}</th>
            <th>{t('type')}</th>
            <th>{t('employer')}</th>
            <th>{t('municipality')}</th>
            <th>{t('date')}</th>
            <th>{t('deadline')}</th>
            <th>{t('result')}</th>
          </tr>
        </thead>
        <tbody>
          {vacData.map((vac, _index) => (
            <tr key={vac.id}>
              <td>{vac.id}</td>
              <td><Link to={`/vacancy/${vac.id}`} target="_blank" >{vac.name}</Link></td>
              <td>{vac.type}</td>
              <td>{vac.employer}</td>
              <td>{vac.municipality}</td>
              <td>{vac.date}</td>
              <td>{vac.deadline}</td>
              <td><i style={{ cursor: 'pointer' }} className='fa-solid fa-circle-info' onClick={handleClick} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="overall_stats">

      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{'.MuiPaper-elevation': {padding: '20px'}}}
      >
        <ul style={{margin:0}}>
          <li>თქვენი ვაკანსია მიღებულია</li>
          <li>რეზიუმე გადაგზავნილია</li>
        </ul>


      </Popover>
    </Container>
  )
}

export default StatisticsCab