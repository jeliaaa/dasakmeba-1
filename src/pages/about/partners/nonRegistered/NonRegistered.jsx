import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../../ReusableComponents/partners/PartnersCard';

const NonRegistered = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div>
        <PartnersCard name={'Spar'} thumb={'https://picsum.photos/200/100'} img={'https://www.nbi.org.za/wp-content/uploads/2020/07/SPAR-logo.jpg'} />
      </div>
    </Container>

  )
}

export default NonRegistered