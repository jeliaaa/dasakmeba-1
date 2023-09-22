import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'
import { Button, Popover, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const vacData = [
  { id: 1, name: 'დასახელება1', type: 'ტიპი1', employer: 'დამსაქმებელი 1', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 2, name: 'დასახელება2', type: 'ტიპი2', employer: 'დამსაქმებელი 2', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 3, name: 'დასახელება3', type: 'ტიპი3', employer: 'დამსაქმებელი 3', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 4, name: 'დასახელება4', type: 'ტიპი4', employer: 'დამსაქმებელი 4', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' },
  { id: 5, name: 'დასახელება5', type: 'ტიპი5', employer: 'დამსაქმებელი 5', municipality: 'ბათუმი', date: '10-11-2014', deadline: '10-12-2014', sphere: 'სფერო' }
]
const MyVacancies = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {t} = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
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
              <td><i style={{cursor: 'pointer'}} className='fa-solid fa-circle-info'onClick={handleClick} /></td>
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