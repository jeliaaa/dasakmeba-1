import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import NavBox from '../../../ReusableComponents/navbox/NavBox';

import { useTranslation } from 'react-i18next';

const Information = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs></Breadcrumbs>
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox name={t('აქ')} to={'/pubInfo/law/kanonebi'} />
                <NavBox name={t('არის')} to={'/pubInfo/law/konvenciebi'} />
                <NavBox name={t('მოსაფიქრებელი')} to={'/pubInfo/law/dadgenilebebi'} />
                <NavBox name={t('რა უნდა ვქნათ')} to={'/pubInfo/law/brdzanebebi'} />


            </div>
        </Container>

    )
}

export default Information