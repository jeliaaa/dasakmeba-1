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
      <div className='cards_wrap'>
        <ProfesiogramaCard a={true} img={itPhoto} name={t('it')} id={'type1'} />
        <ProfesiogramaCard a={true} img={construction} name={t('physical')} id={'type2'} />
        <ProfesiogramaCard a={true} img={servicing} name={t('servicing')} id={'type3'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('lorem')} id={'type4'} />
        <ProfesiogramaCard a={true} img={'https://picsum.photos/300/200'} name={t('ipsum')} id={'type5'} />
      </div>
    </Container>

  )
}

export default Profesiograma