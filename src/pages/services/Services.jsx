import React from 'react'
import NavBox from '../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';

const Services = () => {
    const {t} = useTranslation();
    return (
      <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
      <Breadcrumbs></Breadcrumbs>
    <div className='services_container' style={{display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
        <NavBox name={t('ourServices')} to={'/services/ourServices'} />
        <NavBox name={t('projects')} to={'/services/projects'} />
        <NavBox name={t('grants')} to={'/services/grants'} />
        <NavBox name={t('migration')} to={'/services/migration'} />
    </div>
    </Container>

  )
}

export default Services
