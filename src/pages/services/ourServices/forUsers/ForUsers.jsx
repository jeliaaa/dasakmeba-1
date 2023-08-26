import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../../ReusableComponents/infocard/InfoCard';
import "../../../media/news/News.scss"

const ForUsers = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper'>

        <InfoCard date={'აგვ. 23, 2023'} heading={'სერვისები მაძიებელთათვის 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის'} />
        <InfoCard date={'ივლ. 12, 2023'} heading={'სერვისები მაძიებელთათვის 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული'} />
        <InfoCard date={'მაი. 05, 2023'} heading={'სერვისები მაძიებელთათვის  3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს'} />
      </div>
    </Container>
  )
}

export default ForUsers