import React from 'react'
import NavBox from '../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';

import ServiceBanner from '../../assets/NavBoxBanners/Services/Group 6.png';
import ProjectBanner from '../../assets/NavBoxBanners/Services/Group 7.png';
import GrantsBanner from '../../assets/NavBoxBanners/Services/Group 8.png';
import MigrationBanner from '../../assets/NavBoxBanners/Services/Group 9.png';





const Services = () => {
    const {t} = useTranslation();
    return (
      <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
      <Breadcrumbs></Breadcrumbs>
    <div className='services_container' style={{display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
        <NavBox img={ServiceBanner} name={t('ourServices')} to={'/services/ourServices'} />
        <NavBox img={ProjectBanner} name={t('projects')} to={'/services/projects'} />
        <NavBox img={GrantsBanner} name={t('grants')} to={'/services/grants'} />
        <NavBox img={MigrationBanner} name={t('migration')} to={'/services/migration'} />
    </div>
    </Container>

  )
}

export default Services
