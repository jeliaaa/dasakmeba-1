import React from 'react'
import NavBox from '../../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

import OurPartnerBanner from '../../../assets/NavBoxBanners/About/Partners/Group 26.png';
import EmployerBanner from '../../../assets/NavBoxBanners/About/Partners/Group 27.png';


const Partners = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <NavBox img={EmployerBanner} name={t('დამსაქმებლები')} to={'employers'} />
        <NavBox img={OurPartnerBanner} name={t('პარტნიორები')} to={'ourPartners'} />
      </div>
    </Container>

  )
}

export default Partners