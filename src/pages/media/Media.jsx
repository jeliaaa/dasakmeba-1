import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';

import GalleryBanner from '../../assets/NavBoxBanners/Media/Group 17.png';
import NewsBanner from '../../assets/NavBoxBanners/Media/Group 18.png';



const Media = () => {
    const { t } = useTranslation();
    return (
        <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
        <Breadcrumbs></Breadcrumbs>
        <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox img={GalleryBanner} name={t('gallery')} to={'/media/gallery'} />
            <NavBox img={NewsBanner} name={t('news')} to={'/media/news'} />
        </div>
        </Container>

    )
}

export default Media