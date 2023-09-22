import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import NavBox from '../../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
const Cabinet = () => {
  const {t} = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff' }}>
      <Breadcrumbs />
      <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <NavBox name={t('inbox')} to={'inbox'} />
        <NavBox name={t('vacancies')} to={'vacancies'} />
        <NavBox name={t('myVacancies')} to={'myVacancies'} />
        <NavBox name={t('statistics')} to={'statistics'} />
      </div>
    </Container>
  )
}

export default Cabinet