import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "./News.scss"
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';

import Banner from '../../../assets/Projects.jpg'
import Banner2 from '../../../assets/Projects2.jpg'
import Banner3 from '../../../assets/Projects3.jpg'




const News = () => {
  const paginatedCards = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    paginatedCards.current.classList.add('active');
  }, [])
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='animated' key={animationKey} ref={paginatedCards}>
        <CardsWrap>
          <InfoCard banner={Banner} id={1} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner2} id={2} date={'ივლ. 12, 2023'} heading={'სატესტო ნიუსი 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული ფოსტის სათაურის ველში მიუთითოთ ra unda knat'} />
          <InfoCard banner={Banner3} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner2} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 4'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner3} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 5'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 6'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 7'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner2} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 8'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner3} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 9'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 10'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner2} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 11'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner3} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 12'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 13'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 14'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 15'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 16'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 17'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 18'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 19'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 20'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard banner={Banner} id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard banner={Banner} id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 4'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard banner={Banner} id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 6'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        </CardsWrap>
      </div>

    </Container>

  )
}

export default News