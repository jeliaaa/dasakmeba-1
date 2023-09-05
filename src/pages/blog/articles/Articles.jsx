import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import "../../media/news/News.scss"

const Articles = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper'>
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('Marketing')} id={1} />

      </div>
    </Container>
  )
}

export default Articles