import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "./News.scss"
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';

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
          <InfoCard id={1} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={2} date={'ივლ. 12, 2023'} heading={'სატესტო ნიუსი 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული ფოსტის სათაურის ველში მიუთითოთ ra unda knat'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 4'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 5'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 6'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 7'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 8'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 9'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 10'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 11'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 12'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 13'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 14'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 15'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 16'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 17'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 18'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 19'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 20'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
          <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 4'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
          <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 6'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        </CardsWrap>
      </div>

    </Container>

  )
}

export default News