import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';

const Partners = () => {
  return (
    <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
    <Breadcrumbs></Breadcrumbs>
    <div>Partners</div>
    </Container>

  )
}

export default Partners