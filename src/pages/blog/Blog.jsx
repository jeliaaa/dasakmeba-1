import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import './blogAlignment.scss'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';

import ArticlesBanner from '../../assets/NavBoxBanners/Blog/Group 10.png';
import LessonsBanner from '../../assets/NavBoxBanners/Blog/Group 11.png';
import ProfesBanner from '../../assets/NavBoxBanners/Blog/Group 12.png';
import CalendarBanner from '../../assets/NavBoxBanners/Blog/Group 13.png';
import ClassificationBanner from '../../assets/NavBoxBanners/Blog/Group 14.png';
import ResearchesBanner from '../../assets/NavBoxBanners/Blog/Group 15.png';








const Blog = () => {
    const { t } = useTranslation();
    return (
        <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
        <Breadcrumbs></Breadcrumbs>
        <div className='blog_container' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox img={ArticlesBanner} name={t('articles')} to={'/blog/articles'} />
            <NavBox img={LessonsBanner} name={t('lessons')} to={'/blog/lessons'} />
            <NavBox img={ProfesBanner} name={t('profesiograma')} to={'/blog/profesiograma'} />
            <NavBox img={CalendarBanner} name={t('calendar')} to={'/blog/calendar'} />
            <NavBox img={ClassificationBanner} name={t('classification')} to={'/blog/classification'} />
            <NavBox img={ResearchesBanner} name={t('researches')} to={'/blog/researches'} />
        </div>
        </Container>

    )
}

export default Blog