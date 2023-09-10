import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'

const VideoLesson = () => {
  return (
    <Container style={{backgroundColor: '#fff', padding: 30}}>
        <Breadcrumbs />
        <div className='video_lesson'>
            <video width={'100%'} controls>
                <source src='//vjs.zencdn.net/v/oceans.mp4' />
            </video>
        </div>
    </Container>
  )
}

export default VideoLesson