
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import NavBox from '../../../ReusableComponents/navbox/NavBox';

const QnA = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs/>
            <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <NavBox name={t('qA')} to={'/guide/qA'} />
            </div>
        </Container>

    )
}

export default QnA