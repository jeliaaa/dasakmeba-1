import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../ReusableComponents/partners/PartnersCard'
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';

const VideoLessonsSingle = () => {
  const { type } = useParams();
  return (
    <Container style={{ backgroundColor: "#fff", padding: 30 }}>
      <Breadcrumbs />
      <CardsWrap>
        <PartnersCard link={'1'} name={'vid1'} imgShow={false} thumb={'https://picsum.photos/300/150'} />
        <PartnersCard link={'2'} name={'vid2'} imgShow={false} thumb={'https://picsum.photos/300/150'} />
        <PartnersCard link={'3'} name={'vid3'} imgShow={false} thumb={'https://picsum.photos/300/150'} />
      </CardsWrap>
    </Container>
  )
}

export default VideoLessonsSingle