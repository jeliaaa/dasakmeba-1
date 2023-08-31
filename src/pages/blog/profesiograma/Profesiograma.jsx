import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import itPhoto from "../../../assets/ProfesiogramAssets/IT.jpg"
import construction from "../../../assets/ProfesiogramAssets/Construct.jpg"
import servicing from "../../../assets/ProfesiogramAssets/Servicing.jpg"




const Profesiograma = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='profesiograma_wrapper' style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
        <ProfesiogramaCard a={true} img={itPhoto} name={t('it')} id={1} />
        <ProfesiogramaCard a={true} img={construction} name={t('physical')} id={2} />
        <ProfesiogramaCard a={true} img={servicing} name={t('servicing')} id={3} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('lorem')} id={4} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('ipsum')} id={5} />
      </div>
    </Container>

  )
}

export default Profesiograma