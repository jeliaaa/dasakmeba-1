import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import '../pages/mainPage/mainpage.scss'
import { Avatar, Skeleton, Typography } from '@mui/material';



const Skeletons = () => {
  const { t } = useTranslation();
  const HeroBox = ({ heading, text, image, to }) => {
    return (
      <div className='hero_box' height={400}>
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3>{heading}</h3>
          <p>{text}</p>
          <Link to={to} style={{ color: 'white' }}><button type='button'>გაიგე მეტი</button></Link>
        </div>
        <img src={image} alt="..." />

      </div>
    )
  }
  return (
    <div className='mainPage_wrapper' >
      <Row  >
        <Col xs={12} md={7} style={{ paddingLeft: 0 }} className='swiper_col'>
          <Skeleton variant='rectangular' width={'100%'} height={'100%'}>
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              cssMode={true}
              navigation={true}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000
              }}
              className="news-swiper"
            >

              <SwiperSlide style={{
                height: '350px',  // Set the desired height
                width: '95%',    // Maintain the width of the container
                objectFit: 'cover', // Crop the image to cover the container while maintaining aspect ratio
              }}>
                <Link to={'/services/projects/1'}><img src={'https://picsum.photos/300/100'} alt="" /></Link>
              </SwiperSlide>

              <SwiperSlide style={{
                height: '350px',  // Set the desired height
                width: '95%',    // Maintain the width of the container
                objectFit: 'cover', // Crop the image to cover the container while maintaining aspect ratio
              }}>
                <Link to={'/services/projects/2'}><img src={'https://picsum.photos/300/100'} alt="" /></Link>
              </SwiperSlide>

              <SwiperSlide style={{
                height: '350px',  // Set the desired height
                width: '95%',    // Maintain the width of the container
                objectFit: 'cover', // Crop the image to cover the container while maintaining aspect ratio
              }}>
                <Link to={'/services/projects/3'}><img src={'https://picsum.photos/300/100'} alt="" /></Link>
              </SwiperSlide>



            </Swiper>
          </Skeleton>
        </Col>
        <Col xs={6} md={5} className='vacancy_hero_col'>
          <Skeleton><HeroBox to={'/vacancy'} heading={t('vacancy')} image={'https://picsum.photos/300/100'} text={'აქ იქნება აღწერა ვაკანსიის ველის შესახებ'} /></Skeleton>
        </Col>
      </Row>
      <Row className='justify-content-around mt-4' >
        <Col xs={12} md={6} className='vacancy_hero_col' style={{ paddingLeft: 0 }}>
          <Skeleton><HeroBox to={'/media/news'} heading={t('news')} image={'https://picsum.photos/300/100'} text={'აქაც ასევე იქნება აღწერა ნიუსების გვერდის შესახებ'} /></Skeleton>
        </Col>
        <Col xs={12} md={6} className='vacancy_hero_col'>
          <Skeleton><HeroBox to={'/services/projects'} heading={t('projects')} image={'https://picsum.photos/300/100'} text={'აქაც ასევე იქნება რაღაც ტექსტი ახლა არის სატესტოდ რომ დავინახოთ როგორ ჩანს სხვადასხვა ზომის ტექსტები ამ ველში'} /></Skeleton>
        </Col>
      </Row>





      <Typography variant='h1'><Skeleton></Skeleton></Typography>
      <Typography variant='h2'><Skeleton></Skeleton></Typography>
      <Typography variant='h3'><Skeleton></Skeleton></Typography>
      <Typography variant='h4'><Skeleton></Skeleton></Typography>
      <Typography variant='h5'><Skeleton></Skeleton></Typography>
      <Typography variant='h6'><Skeleton></Skeleton></Typography>
      <Typography variant='p'><Skeleton></Skeleton></Typography>

      <Skeleton variant="circular">
        <Avatar />
      </Skeleton>

      <Skeleton variant="rectangular"></Skeleton>
      <Skeleton variant="rounded"></Skeleton>



      <Skeleton
        sx={{ bgcolor: 'greenyellow' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </div >
  )
}
export default Skeletons