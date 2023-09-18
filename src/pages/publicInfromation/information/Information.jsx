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
                <NavBox name={t('აქ')} to={'/publicInformation/law/kanonebi'} />
                <NavBox name={t('არის')} to={'/publicInformation/law/konvenciebi'} />
                <NavBox name={t('მოსაფიქრებელი')} to={'/publicInformation/law/dadgenilebebi'} />
                <NavBox name={t('რა უნდა ვქნათ')} to={'/publicInformation/law/brdzanebebi'} />


            </div>
        </Container>

    )
}

export default Information