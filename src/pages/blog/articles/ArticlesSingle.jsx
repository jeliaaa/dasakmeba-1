import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';

const ArticlesSingle = () => {
    const { id } = useParams();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '30px' }}>
            <Breadcrumbs />
            <div className='news_wrapper'>
                <InfoCard id={1} date={'აგვ. 23, 2023'} heading={'სტატია 1'} thumbText={`დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე ${id}`} />
            </div>
        </Container>
    )
}

export default ArticlesSingle