import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';

const QnA = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs></Breadcrumbs>
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox name={t('guide')} to={'/qA/guide'} />
            </div>
        </Container>

    )
}

export default QnA