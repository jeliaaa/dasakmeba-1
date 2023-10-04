import React from 'react'
import { useTranslation } from 'react-i18next'
import './aboutAlignment.scss'
import NavBox from '../../ReusableComponents/navbox/NavBox';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';

import BaseInfoBanner from '../../assets/NavBoxBanners/About/Group 1.png';
import StatisticBanner from '../../assets/NavBoxBanners/About/Group 3.png';
import StructBanner from '../../assets/NavBoxBanners/About/Group 2.png';
import PartBanner from '../../assets/NavBoxBanners/About/Group 5.png';
import BrandBanner from '../../assets/NavBoxBanners/About/Group 4.png';




const About = () => {
  const {t} = useTranslation();
  
  return (
    <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
    <Breadcrumbs></Breadcrumbs>
    <div className='about_container' style={{display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
      <NavBox img={BaseInfoBanner} name={t('baseInfo')} to={'/about/baseInfo'} />
      <NavBox img={BrandBanner} name={t('brand')} to={'/about/brand'}/>
      <NavBox img={PartBanner} name={t('partners')} to={'/about/partners'}/>
      <NavBox img={StructBanner} name={t('structure')} to={'/about/structure'}/>
      <NavBox img={StatisticBanner} name={t('stats')} to={'/about/statistics'}/>
    </div>
    </Container>

  )
}

export default About