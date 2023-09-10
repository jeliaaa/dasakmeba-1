import React from 'react'
import NavBox from '../../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <NavBox name={t('დამსაქმებელი ორგანიზაციები')} to={'/about/partners/Registered'} />
        <NavBox name={t('პარტნიორი ორგანიზაციები')} to={'/about/partners/nonRegistered'} />
      </div>
    </Container>

  )
}

export default Partners