import React from 'react'
import { useTranslation } from 'react-i18next'
import './aboutAlignment.scss'
import NavBox from '../../ReusableComponents/navbox/NavBox';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';


const About = () => {
  const {t} = useTranslation();
  
  return (
    <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
    <Breadcrumbs></Breadcrumbs>
    <div className='about_container' style={{display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
      <NavBox name={t('baseInfo')} to={'/about/baseInfo'} />
      <NavBox name={t('brand')} to={'/about/brand'}/>
      <NavBox name={t('partners')} to={'/about/partners'}/>
      <NavBox name={t('structure')} to={'/about/structure'}/>
      <NavBox name={t('stats')} to={'/about/statistics'}/>
    </div>
    </Container>

  )
}

export default About