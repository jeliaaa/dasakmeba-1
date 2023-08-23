import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const ForUsers = () => {
  return (
    <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
    <Breadcrumbs></Breadcrumbs>
    <div>Users</div>
    </Container>

  )
}

export default ForUsers