import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { InputLabel, NativeSelect, Popover, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Input } from '@mui/base'
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
const colors = ['success', 'danger', 'info', 'warning']
const MyVacancies = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { t } = useTranslation();
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
      <Table striped responsive>
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('name')}</th>
            <th>{t('type')}</th>
            <th>{t('employer')}</th>
            <th>{t('municipality')}</th>
            <th>{t('date')}</th>
            <th>{t('deadline')}</th>
            <th>{t('შედეგი')}</th>
          </tr>
        </thead>
        <tbody>
          {vacData.map((vac) => (
            <tr key={vac.id}>
              <td>{vac.id}</td>
              <td><Link to={`/vacancy/${vac.id}`} target="_blank" >{vac.name}</Link></td>
              <td>{vac.type}</td>
              <td>{vac.employer}</td>
              <td>{vac.municipality}</td>
              <td>{vac.date}</td>
              <td>{vac.deadline}</td>
              <td><div className={`bg-${colors[vac.id - 1] ? colors[vac.id - 1] : 'primary'} text-white`} style={{padding: 5, borderRadius: 5, display:'flex', justifyContent:'space-between', alignItems:'center'}}>ტექსტი <i className='fa-solid fa-check'/></div></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    </Container>
  )
}

export default MyVacancies