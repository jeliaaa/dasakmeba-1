import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';

const News = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div>
        <InfoCard date={'აგვ. 23, 2023'} heading={'News 1'} thumbText={'NEWS lorem lorem lorem lorem lorem lorem ,orem NEws NWew'} />
      </div>
    </Container>

  )
}

export default News