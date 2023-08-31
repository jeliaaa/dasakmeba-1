import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const VideoLessonsSingle = () => {
  const {id} = useParams();
    return (
    <Container style={{backgroundColor:"#fff"}}>
        <Breadcrumbs />
        <div>{id}</div>
    </Container>
  )
}

export default VideoLessonsSingle