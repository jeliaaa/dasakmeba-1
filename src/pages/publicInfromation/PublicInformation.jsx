import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import { useTranslation } from 'react-i18next';

import LawBanner from '../../assets/NavBoxBanners/PubInfo/Group 23.png';
import InfoBanner from '../../assets/NavBoxBanners/PubInfo/Group 22.png';



const PublicInformation = () => {
  const {t} = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <NavBox img={LawBanner} name={t('Law')} to={'/pubInfo/law'} />
        <NavBox img={InfoBanner} name={t('Information')} to={'/pubInfo/information'} />
      </div>
    </Container>

  )
}

export default PublicInformation