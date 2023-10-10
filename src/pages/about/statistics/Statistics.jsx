import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';
import TabMenu from '../../../ReusableComponents/tabMenu/TabMenu';

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