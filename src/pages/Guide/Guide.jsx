import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import { useTranslation } from 'react-i18next';
import './guide.scss'

import QaBanner from '../../assets/NavBoxBanners/Guide/Group 19.png';
import Manualbanner from '../../assets/NavBoxBanners/Guide/Group 20.png';
import Stuctbanner from '../../assets/NavBoxBanners/Guide/Group 21.png';




const Guide = () => {
    const {t} = useTranslation();
    return (
      <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
        <Breadcrumbs />
        <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <NavBox img={QaBanner} name={t('qA')} to={'/guide/qA'} />
          <NavBox img={Manualbanner} name={t('userManual')} to={'/guide/userManual'} />
          <NavBox img={Stuctbanner} name={t('siteStructure')} to={'/guide/siteStructure'} />
        </div>
      </Container>
  
    )
  }

export default Guide