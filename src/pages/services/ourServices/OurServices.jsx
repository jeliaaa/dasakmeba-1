import React from 'react'
import NavBox from '../../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

import ForOrgBanner from '../../../assets/NavBoxBanners/Services/Ourservices/Group 29.png';
import ForUserBanner from '../../../assets/NavBoxBanners/Services/Ourservices/Group 28.png';


const OurServices = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <NavBox img={ForOrgBanner} name={t('forOrg')} to={'/services/ourServices/forOrgs'} />
        <NavBox img={ForUserBanner} name={t('forUsers')} to={'/services/ourServices/forUsers'} />

      </div>
    </Container>

  )
}

export default OurServices