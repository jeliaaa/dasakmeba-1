import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "../../media/news/News.scss"
import ActiveTabs from '../../../ReusableComponents/activeTabs/ActiveTabs';
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';
const tabs = [
  {
    id: 1, label: 'აქტიური', children:
      [
        <InfoCard id={1} date={'აგვ. 23, 2023'} heading={'საგრანტო პროგრამა 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={2} date={'აგვ. 23, 2023'} heading={'საგრანტო პროგრამა 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={3} date={'აგვ. 23, 2023'} heading={'საგრანტო პროგრამა 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
      ]
  },
  {
    id: 2, label: 'შესრულებული', children:
      [
        <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'საგრანტო პროგრამა 4'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={5} date={'აგვ. 23, 2023'} heading={'საგრანტო პროგრამა 5'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={6} date={'აგვ. 23, 2023'} heading={'საგრანტო პროგრამა 6'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
      ]
  },

]
const Grants = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <CardsWrap>
        <ActiveTabs tabs={tabs} />
      </CardsWrap>
    </Container>

  )
}

export default Grants