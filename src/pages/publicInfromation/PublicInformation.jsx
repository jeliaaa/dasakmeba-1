import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import { useTranslation } from 'react-i18next';

const PublicInformation = () => {
  const {t} = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <NavBox name={t('Law')} to={'/publicInformation/law'} />
        <NavBox name={t('Information')} to={'/publicInformation/information'} />
      </div>
    </Container>

  )
}

export default PublicInformation