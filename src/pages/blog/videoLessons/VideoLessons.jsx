import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';

const VideoLessons = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='profesiograma_wrapper' style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
        <ProfesiogramaCard a={true} img={"https://picsum.photos/id/10/300/200"} name={t('მიმართულება 1')} id={1} />
        <ProfesiogramaCard a={true} img={"https://picsum.photos/id/11/300/200"} name={t('მიმართულება 2')} id={2} />
        <ProfesiogramaCard a={true} img={"https://picsum.photos/id/12/300/200"} name={t('მიმართულება 3')} id={3} />
        <ProfesiogramaCard a={true} img={"https://picsum.photos/id/13/300/200"} name={t('მიმართულება 4')} id={4} />
        <ProfesiogramaCard a={true} img={"https://picsum.photos/id/14/300/200"} name={t('მიმართულება 5')} id={5} />
      </div>
    </Container>
  )
}

export default VideoLessons