import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "./News.scss"
import BackBtn from '../../../ReusableComponents/backBtn/BackBtn';

const News = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <BackBtn />
      <div className='news_wrapper'>
        <InfoCard id={1} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard id={2} date={'ივლ. 12, 2023'} heading={'სატესტო ნიუსი 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული ფოსტის სათაურის ველში მიუთითოთ'} />
        <InfoCard id={3} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
        <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 4'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
        <InfoCard id={5} date={'ივლ. 12, 2023'} heading={'სატესტო ნიუსი 5'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
        <InfoCard id={6} date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 6'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      </div>
    </Container>

  )
}

export default News