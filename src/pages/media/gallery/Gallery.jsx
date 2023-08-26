import React, { useState } from 'react'
import { Container, Modal } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import './gallery.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Keyboard } from 'swiper/modules';
const Gallery = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen
      >
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <div className='gallery_scroll'>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              keyboard={true}
              modules={[Scrollbar, Keyboard]}
              className="mySwiper"
              loop
            >
              <SwiperSlide><img src={`https://picsum.photos/id/1${props.id}/2000/1500`} alt='...' /></SwiperSlide>
              <SwiperSlide><img src={`https://picsum.photos/id/2${props.id}/2000/1500`} alt='...' /></SwiperSlide>
              <SwiperSlide><img src={`https://picsum.photos/id/3${props.id}/2000/1500`} alt='...' /></SwiperSlide>
              <SwiperSlide><img src={`https://picsum.photos/id/4${props.id}/2000/1500`} alt='...' /></SwiperSlide>
            </Swiper>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='gallery_wrapper'>
        <ProfesiogramaCard click={() => setModalShow1(true)} a={false} img={'https://picsum.photos/id/1/200/100'} />
        <ProfesiogramaCard click={() => setModalShow2(true)} a={false} img={'https://picsum.photos/id/2/200/100'} />
        <ProfesiogramaCard click={() => setModalShow3(true)} a={false} img={'https://picsum.photos/id/3/200/100'} />
      </div>
      <MyVerticallyCenteredModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        id={2}
      />
      <MyVerticallyCenteredModal
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        id={3}
      />
      <MyVerticallyCenteredModal
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        id={4}
      />
    </Container>

  )
}

export default Gallery