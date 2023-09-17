import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import './gallery.scss'
import 'swiper/css';
import 'swiper/css/scrollbar';
const Gallery = () => {

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='cards_wrap'>
        <ProfesiogramaCard name={'ალბომი #1'} a={true} id={'1'} img={'https://picsum.photos/id/1/200/100'} />
        <ProfesiogramaCard name={'ალბომი #2'} a={true} id={'2'} img={'https://picsum.photos/id/2/200/100'} />
        <ProfesiogramaCard name={'ალბომი #3'} a={true} id={'3'} img={'https://picsum.photos/id/3/200/100'} />
        <ProfesiogramaCard name={'ალბომი #4'} a={true} id={'4'} img={'https://picsum.photos/id/4/200/100'} />
      </div>
    </Container>

  )
}

export default Gallery