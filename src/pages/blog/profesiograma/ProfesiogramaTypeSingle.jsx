import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import InfoCard from '../../../ReusableComponents/infocard/InfoCard'
import './profesiograma.scss'

const ProfesiogramaTypeSingle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className="cards_wrap">
        <InfoCard id={'1'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard id={'2'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard id={'3'} date={'აგვ. 23, 2023'} heading={'პროფესიოგრამა 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      </div>
    </Container>
  )
}

export default ProfesiogramaTypeSingle