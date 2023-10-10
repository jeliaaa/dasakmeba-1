import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import NavBox from '../../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'
import CabinetBanner from '../../../assets/NavBoxBanners/User/Group 30.png'
import OtherBanner from '../../../assets/NavBoxBanners/User/Group 33.png'
const FamilyWork = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs />
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox img={CabinetBanner} name={t('cabinet')} to={'cabinet'} />
                <NavBox img={OtherBanner} name={t('რაღაც')} to={'otherDetails'} />
            </div>
        </Container>
    )
}

export default FamilyWork