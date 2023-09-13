import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './mainpage.scss'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import slide1 from "../../assets/BannerAssets/Banner1.webp"
import slide2 from "../../assets/BannerAssets/Banner2.webp"
import slide3 from "../../assets/BannerAssets/Banner3.jpg"
import photo1 from "../../assets/mainPageAssets/pic1.jpg"
import photo2 from "../../assets/mainPageAssets/pic2.jpg"
import photo3 from "../../assets/mainPageAssets/pic3.jpg"
import { Link } from 'react-router-dom';



const MainPage = () => {
  const { t } = useTranslation();
  const HeroBox = ({ heading, text, image, to }) => {
    return (
      <div className='hero_box'>
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
              <Link to={'/services/projects/1'}><img src={slide1} alt="" /></Link>
            </SwiperSlide>

            <SwiperSlide style={{
              height: '350px',  // Set the desired height
              width: '95%',    // Maintain the width of the container
              objectFit: 'cover', // Crop the image to cover the container while maintaining aspect ratio
            }}>
              <Link to={'/services/projects/2'}><img src={slide2} alt="" /></Link>
            </SwiperSlide>

            <SwiperSlide style={{
              height: '350px',  // Set the desired height
              width: '95%',    // Maintain the width of the container
              objectFit: 'cover', // Crop the image to cover the container while maintaining aspect ratio
            }}>
              <Link to={'/services/projects/3'}><img src={slide3} alt="" /></Link>
            </SwiperSlide>



          </Swiper>
        </Col>
        <Col xs={6} md={5} className='vacancy_hero_col'>
          <HeroBox to={'/vacancy'} heading={t('vacancy')} image={photo1} text={'აქ იქნება აღწერა ვაკანსიის ველის შესახებ'} />
        </Col>
      </Row>
      <Row className='justify-content-around mt-4' >
        <Col xs={12} md={6} className='vacancy_hero_col' style={{ paddingLeft: 0 }}>
          <HeroBox to={'/media/news'} heading={t('news')} image={photo2} text={'აქაც ასევე იქნება აღწერა ნიუსების გვერდის შესახებ'} />
        </Col>
        <Col xs={12} md={6} className='vacancy_hero_col'>
          <HeroBox to={'/services/projects'} heading={t('projects')} image={photo3} text={'აქაც ასევე იქნება რაღაც ტექსტი ახლა არის სატესტოდ რომ დავინახოთ როგორ ჩანს სხვადასხვა ზომის ტექსტები ამ ველში'} />
        </Col>
      </Row>

    </div >
  )
}
export default MainPage