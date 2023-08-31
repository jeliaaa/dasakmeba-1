import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const ArticlesSingle = () => {
    const { id } = useParams();
    return (
        <Container style={{backgroundColor:'#fff'}}>
            <Breadcrumbs />
            <div>ArticlesSingle {id}</div>
        </Container>
    )
}

export default ArticlesSingle