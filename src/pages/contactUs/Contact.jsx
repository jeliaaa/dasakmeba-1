import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import mapImg from '../../assets/map/map.png'
import './contact.scss'
const Contact = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className="map_wrapper">
        <img src={mapImg} alt="..." />
        <div className='building_img_wrapper'>
          <p>Address: Batumi, Javakhishvili str. 70/72</p>
        </div>
      </div>
      <div>+995 422 24 78 82</div>
    </Container>

  )
}

export default Contact