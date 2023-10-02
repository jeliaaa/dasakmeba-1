import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "../../media/news/News.scss"
import { useTranslation } from 'react-i18next';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import NonPaginated from '../../../ReusableComponents/CardsWrap/NonPaginated';
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
  const {t} = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <NonPaginated>
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('სახელმწიფო')} id={'type1'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('საგანმანათლებლო')} id={'type2'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('რაღაც')} id={'type3'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('რაღაც')} id={'type4'} />
      </NonPaginated>
    </Container>

  )
}

export default Grants