import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const Classification = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='classification_wrapper'>

      </div>
    </Container>

  )
}

export default Classification