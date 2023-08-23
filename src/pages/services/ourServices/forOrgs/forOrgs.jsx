import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const ForOrgs = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div>Orgs</div>
    </Container>

  )
}

export default ForOrgs