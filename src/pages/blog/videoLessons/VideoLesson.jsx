import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import './vid-lessons.scss'
const VideoLesson = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className='video_lesson'>
        <div className='upper_description'>
          <h4>ვიდეო გაკვეთილის სათაური</h4>
          <p>23.05.2021</p>
        </div>
        <video width={'100%'} controls>
          <source src='//vjs.zencdn.net/v/oceans.mp4' />
        </video>
        <Container className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at, fugit id illo sapiente quia reiciendis eius accusamus minus, quam doloremque mollitia ducimus facilis unde accusantium, nostrum qui maiores omnis excepturi cumque nisi voluptatum sint! Rem, est et alias dolore vel laboriosam at minus beatae architecto doloremque deserunt sunt voluptas suscipit necessitatibus labore dicta expedita error tempore quam impedit accusantium temporibus. Consequatur, inventore ducimus? Molestiae ducimus saepe quos necessitatibus consectetur.
        </Container>
      </div>
    </Container>
  )
}

export default VideoLesson