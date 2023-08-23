import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';



const Brand = () => {
  return (
    <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
    <Breadcrumbs></Breadcrumbs>
      <div>Brand</div>
    </Container>

    
  )
}

export default Brand