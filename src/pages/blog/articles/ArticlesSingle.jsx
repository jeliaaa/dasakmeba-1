import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';


import banner from "../../../assets/Marketing.png"

const ArticlesSingle = () => {
    const { id } = useParams();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '30px' }}>
            <Breadcrumbs />
            <CardsWrap>
                <InfoCard banner={banner} id={1} date={'აგვ. 23, 2023'} heading={'რა არის რეკლამა?'} thumbText={`ჩვენ და ყველა ჩვენგანს ერთი ორი  ${id}`} />
            </CardsWrap>
        </Container>
    )
}

export default ArticlesSingle