import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

const SiteStruct = () => {
    const { t } = useTranslation();

    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
        <Breadcrumbs></Breadcrumbs>
        <div className='guide_wrapper'>
            test
        </div>
        </Container>
    )
}

export default SiteStruct