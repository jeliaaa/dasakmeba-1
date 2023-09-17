import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import "../../media/news/News.scss"
import NonPaginated from '../../../ReusableComponents/CardsWrap/NonPaginated';

const Articles = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <NonPaginated>
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('Marketing')} id={'type1'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('IT')} id={'type2'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('Journalist')} id={'type3'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('Journalist')} id={'type4'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('Journalist')} id={'type5'} />
      </NonPaginated>
    </Container>
  )
}

export default Articles