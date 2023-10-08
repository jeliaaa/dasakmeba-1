import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import './gallery.scss'
import 'swiper/css';
import 'swiper/css/scrollbar';
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';
const Gallery = () => {

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <CardsWrap>
        <ProfesiogramaCard name={'საერთაშორისო ფორუმი ბათუმში'} a={true} id={'1'} img={'https://picsum.photos/id/1/200/100'} />
        <ProfesiogramaCard name={'ბათუმის საგანმანათლებლო ღონისძიება'} a={true} id={'2'} img={'https://picsum.photos/id/2/200/100'} />
        <ProfesiogramaCard name={'სატესტო სათაური რომელიც გვაჩვენებს რომ აქ ამხელა ტექსტი არ უნდა იყოს'} a={true} id={'3'} img={'https://picsum.photos/id/3/200/100'} />
        <ProfesiogramaCard name={'სასურველია ასეთი'} a={true} id={'4'} img={'https://picsum.photos/id/4/200/100'} />
      </CardsWrap>
    </Container>

  )
}

export default Gallery