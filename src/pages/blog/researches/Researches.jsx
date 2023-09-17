import React from 'react'
import { Container, Table } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import "../../media/news/News.scss"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const statsData = [
  { id: 1, name: 'კვლევა N1', date: '12.01.2021' },
  { id: 2, name: 'კვლევა N2', date: '21.02.2021' },
  { id: 3, name: 'კვლევა N3', date: '21.03.2021' },
  { id: 4, name: 'კვლევა N4', date: '21.04.2021' },
  { id: 5, name: 'კვლევა N5', date: '21.05.2021' },
  { id: 6, name: 'კვლევა N6', date: '21.06.2021' },
  { id: 7, name: 'კვლევა N7', date: '21.07.2021' },
  { id: 8, name: 'კვლევა N8', date: '21.08.2021' },
  { id: 9, name: 'კვლევა N9', date: '21.09.2021' },
  { id: 10, name: 'კვლევა N10', date: '21.10.2021' }
]
const Researches = () => {
  const { t } = useTranslation();
  return (
    <div className='researches_wrapper' style={{backgroundColor:'#fff', padding:'40px'}}>
      <Breadcrumbs />
      <Container style={{ backgroundColor: '#fff' }}>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>{t('name')}</th>
              <th>{t('date')}</th>
              <th>{t('view')}</th>
            </tr>
          </thead>
          <tbody>
            {statsData.map((file) => (
              <tr key={file.id}>
                <td>{file.id}</td>
                <td>{file.name}</td>
                <td>{file.date}</td>
                <td>{<Link to={`${file.id}`}>{file.name}</Link>}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Researches