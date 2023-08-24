import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';

const Profesiograma = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='profesiograma_wrapper' style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
        <ProfesiogramaCard img={'https://picsum.photos/300/200'} name={t('it')} id={1} />
        <ProfesiogramaCard img={'https://picsum.photos/300/200'} name={t('physical')} id={2} />
        <ProfesiogramaCard img={'https://picsum.photos/300/200'} name={t('servicing')} id={3} />
        <ProfesiogramaCard img={'https://picsum.photos/300/200'} name={t('lorem')} id={4} />
        <ProfesiogramaCard img={'https://picsum.photos/300/200'} name={t('ipsum')} id={5} />
      </div>
    </Container>

  )
}

export default Profesiograma