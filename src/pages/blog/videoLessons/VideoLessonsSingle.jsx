import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../ReusableComponents/partners/PartnersCard'

const VideoLessonsSingle = () => {
  const { type } = useParams();
  return (
    <Container style={{ backgroundColor: "#fff", padding: 30 }}>
      <Breadcrumbs />
        <div className="profesiogramaTypeSingle_wrapper">
          <PartnersCard link={'1'} name={'vid1'} img={'https://picsum.photos/200'} thumb={'https://picsum.photos/300/150'}  />
          <PartnersCard link={'2'} name={'vid2'} img={'https://picsum.photos/200'} thumb={'https://picsum.photos/300/150'}  />
          <PartnersCard link={'3'} name={'vid3'} img={'https://picsum.photos/200'} thumb={'https://picsum.photos/300/150'}  />
      </div>
    </Container>
  )
}

export default VideoLessonsSingle