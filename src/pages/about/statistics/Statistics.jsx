import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';
import TabMenu from '../../../ReusableComponents/tabMenu/TabMenu';

// const statsData = [
//   { id: 1, name: 'ხარჯთაღრიცხვა N1', to: '/dummy.pdf' , date: '12.01.2021'},
//   { id: 2, name: 'ხარჯთაღრიცხვა N2', to: '/dummy.pdf' , date: '21.02.2021'},
//   { id: 3, name: 'ხარჯთაღრიცხვა N3', to: '/dummy.pdf' , date: '21.03.2021'},
//   { id: 4, name: 'ხარჯთაღრიცხვა N4', to: '/dummy.pdf' , date: '21.04.2021'},
//   { id: 5, name: 'ხარჯთაღრიცხვა N5', to: '/dummy.pdf' , date: '21.05.2021'},
//   { id: 6, name: 'ხარჯთაღრიცხვა N6', to: '/dummy.pdf' , date: '21.06.2021'},
//   { id: 7, name: 'ხარჯთაღრიცხვა N7', to: '/dummy.pdf' , date: '21.07.2021'},
//   { id: 8, name: 'ხარჯთაღრიცხვა N8', to: '/dummy.pdf' , date: '21.08.2021'},
//   { id: 9, name: 'ხარჯთაღრიცხვა N9', to: '/dummy.pdf' , date: '21.09.2021'},
//   { id: 10, name: 'ხარჯთაღრიცხვა N10', to: '/dummy.pdf' , date: '21.10.2021'}
// ]
const Statistics = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      {/* <Container>
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
                <td>{<Link to={file.to} target="_blank" download>{file.name}</Link>}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container> */}
      <TabMenu />

    </Container>

  )
}

export default Statistics