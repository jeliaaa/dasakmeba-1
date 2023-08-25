import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "./News.scss"

const News = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper'>
        <InfoCard date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard date={'ივლ. 12, 2023'} heading={'სატესტო ნიუსი 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული ფოსტის სათაურის ველში მიუთითოთ'} />
        <InfoCard date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
        <InfoCard date={'აგვ. 23, 2023'} heading={'სატესტო ნიუსი 4'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით'} />
        <InfoCard date={'ივლ. 12, 2023'} heading={'სატესტო ნიუსი 5'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} />
        <InfoCard date={'მაი. 05, 2023'} heading={'სატესტო ნიუსი 6'} thumbText={'გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      </div>
    </Container>

  )
}

export default News