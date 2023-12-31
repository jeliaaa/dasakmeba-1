import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import InfoCard from '../../../ReusableComponents/infocard/InfoCard'
import './profesiograma.scss'
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap'



import Banner from '../../../assets/Projects.jpg'
import Banner2 from '../../../assets/Projects2.jpg'
import Banner3 from '../../../assets/Projects3.jpg'

const ProfesiogramaTypeSingle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <CardsWrap>
        <InfoCard banner={Banner} id={'1'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard banner={Banner2} id={'2'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard banner={Banner3} id={'3'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      </CardsWrap>
    </Container>
  )
}

export default ProfesiogramaTypeSingle