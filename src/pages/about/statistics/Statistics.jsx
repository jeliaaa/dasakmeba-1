import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';


const Statistics = () => {
  return (
    <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
    <Breadcrumbs></Breadcrumbs>
    <div>Statistics</div>
    </Container>

  )
}

export default Statistics