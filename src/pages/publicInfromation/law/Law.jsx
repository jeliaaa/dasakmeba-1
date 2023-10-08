import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import NavBox from '../../../ReusableComponents/navbox/NavBox';
import { useTranslation } from 'react-i18next';


import LawBanner from '../../../assets/NavBoxBanners/PubInfo/Laws/Group 34.png'
import KonvBanner from '../../../assets/NavBoxBanners/PubInfo/Laws/Group 35.png'
import DadgBanner from '../../../assets/NavBoxBanners/PubInfo/Laws/Group 36.png'
import BrdzBanner from '../../../assets/NavBoxBanners/PubInfo/Laws/Group 37.png'




const Law = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs></Breadcrumbs>
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox img={LawBanner} name={t('kanonebi')} to={'/pubInfo/law/kanonebi'} />
                <NavBox img={KonvBanner} name={t('konvenciebi')} to={'/pubInfo/law/konvenciebi'} />
                <NavBox img={DadgBanner} name={t('dadgenilebebi')} to={'/pubInfo/law/dadgenilebebi'} />
                <NavBox img={BrdzBanner} name={t('brdzanebebi')} to={'/pubInfo/law/brdzanebebi'} />
            </div>
        </Container>

    )
}

export default Law