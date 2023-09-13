import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap'
import InfoCard from '../../../ReusableComponents/infocard/InfoCard'

const GrantsTypeSingle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <CardsWrap>
        <InfoCard active={true} id={'1'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard active={false} id={'2'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard active={true} id={'3'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      </CardsWrap>
    </Container>
  )
}

export default GrantsTypeSingle