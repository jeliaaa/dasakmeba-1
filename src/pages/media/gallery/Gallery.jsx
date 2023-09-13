import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import ProfesiogramaCard from '../../../ReusableComponents/profesiograma/ProfesiogramaCard';
import './gallery.scss'
import 'swiper/css';
import 'swiper/css/scrollbar';
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';
const Gallery = () => {
  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="xl"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //       fullscreen
  //     >
  //       <Modal.Header closeButton>

  //       </Modal.Header>
  //       <Modal.Body>
  //         <div className='gallery_scroll'>
  //           <Swiper
  //             scrollbar={{
  //               hide: true,
  //             }}
  //             keyboard={true}
  //             navigation={true}
  //             modules={[Scrollbar, Keyboard, Navigation]}
  //             className="mySwiper"
  //             loop
  //           >
  //             <SwiperSlide><img src={`https://picsum.photos/id/1${props.id}/2000/1500`} alt='...' /></SwiperSlide>
  //             <SwiperSlide><img src={`https://picsum.photos/id/2${props.id}/2000/1500`} alt='...' /></SwiperSlide>
  //             <SwiperSlide>
  //               <iframe
  //                 src="//vjs.zencdn.net/v/oceans.mp4"
  //                 className='vidOfGallery'
  //                 width={'2000'}
  //                 allowFullScreen
  //                 title="Embedded Video"
  //               ></iframe>
  //             </SwiperSlide>
  //             <SwiperSlide><img src={`https://picsum.photos/id/4${props.id}/2000/1500`} alt='...' /></SwiperSlide>
  //           </Swiper>
  //         </div>
  //       </Modal.Body>
  //     </Modal>
  //   );
  // }

  // const [modalShow1, setModalShow1] = useState(false);
  // const [modalShow2, setModalShow2] = useState(false);
  // const [modalShow3, setModalShow3] = useState(false);
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <CardsWrap>
        <ProfesiogramaCard name={'satauri1'} a={true} id={'1'} img={'https://picsum.photos/id/1/200/100'} />
        <ProfesiogramaCard name={'satauri2'} a={true} id={'2'} img={'https://picsum.photos/id/2/200/100'} />
        <ProfesiogramaCard name={'satauri3'} a={true} id={'3'} img={'https://picsum.photos/id/3/200/100'} />
        <ProfesiogramaCard name={'satauri4satauri4satauri4satauri4satauri4'} a={true} id={'4'} img={'https://picsum.photos/id/4/200/100'} />
      </CardsWrap>
      {/* <MyVerticallyCenteredModal
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
      /> */}
    </Container>

  )
}

export default Gallery