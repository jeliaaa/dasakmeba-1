import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap'
import InfoCard from '../../../ReusableComponents/infocard/InfoCard'

import Banner from '../../../assets/Projects.jpg'
import Banner2 from '../../../assets/Projects2.jpg'
import Banner3 from '../../../assets/Projects3.jpg'




const GrantsTypeSingle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <CardsWrap>
        <InfoCard banner={Banner} id={'1'} date={'აგვ. 23, 2023'} heading={'სასოფლო მეურნეობის მხარდამჭერი ბენეფიციარების გრანტი'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard banner={Banner2} id={'2'} date={'აგვ. 23, 2023'} heading={'სატესტო გრანტი ამა და ამ ქვეჯგუფებისთვის'} thumbText={'რაოდენ გასაკვირიც არ უნდა იყოს თქვენ შეგიძლიათ დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard banner={Banner3}id={'3'} date={'აგვ. 23, 2023'} heading={'ქართველი ხალხის კიდევ ერთი წარმატება'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      </CardsWrap>
    </Container>
  )
}

export default GrantsTypeSingle