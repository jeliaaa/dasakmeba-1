import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';

const Contact = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs></Breadcrumbs>
    <div>+995 422 24 78 82</div>
    </Container>

  )
}

export default Contact