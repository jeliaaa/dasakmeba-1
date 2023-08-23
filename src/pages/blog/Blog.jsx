import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';
import './blogAlignment.scss'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';




const Blog = () => {
    const { t } = useTranslation();
    return (
        <Container style={{backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px'}}>
        <Breadcrumbs></Breadcrumbs>
        <div className='blog_container' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox name={t('articles')} to={'/blog/articles'} />
            <NavBox name={t('lessons')} to={'/blog/vid-lessons'} />
            <NavBox name={t('profesiograma')} to={'/blog/profesiograma'} />
            <NavBox name={t('calendar')} to={'/blog/calendar'} />
            <NavBox name={t('classification')} to={'/blog/classification'} />
            <NavBox name={t('researches')} to={'/blog/researches'} />
        </div>
        </Container>

    )
}

export default Blog