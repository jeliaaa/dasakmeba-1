import React from 'react'
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';
import NavBox from '../../ReusableComponents/navbox/NavBox';

const User = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs/>
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox name={t('cabinet')} to={'cabinet'} />
                <NavBox name={t('profile')} to={'profile'} />
                <NavBox name={t('CV')} to={'CV'} />
            </div>
        </Container>

    )
}

export default User