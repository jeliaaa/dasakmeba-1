import React from 'react'
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';
import NavBox from '../../ReusableComponents/navbox/NavBox';

import CabinetBanner from '../../assets/NavBoxBanners/User/Group 30.png'
import ProfileBanner from '../../assets/NavBoxBanners/User/Group 31.png'
import CVBanner from '../../assets/NavBoxBanners/User/Group 32.png'
import OtherBanner from '../../assets/NavBoxBanners/User/Group 33.png'




const User = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs/>
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox img={CabinetBanner} name={t('cabinet')} to={'cabinet'} />
                <NavBox img={ProfileBanner} name={t('profile')} to={'profile'} />
                <NavBox img={CVBanner} name={t('CV')} to={'CV'} />
                <NavBox img={OtherBanner} name={t('რაღაც')} to={'otherDetails'} />
            </div>
        </Container>

    )
}

export default User