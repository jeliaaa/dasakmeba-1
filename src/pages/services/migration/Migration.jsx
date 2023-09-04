import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "../../media/news/News.scss"
import PartnersCard from '../../../ReusableComponents/partners/PartnersCard';


const Migration = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper'>
        <PartnersCard link={'1'} name={'Poland'} thumb={'https://www.studyinpoland.pl/en/images/articles/why-poland-new.jpg'}  img={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png'} />
        <PartnersCard link={'2'} name={'Germany'} thumb={'https://cdn.internationalliving.com/wp-content/uploads/2020/02/Germany-1.jpg'}  img={'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'} />
        <PartnersCard link={'3'} name={'Estonia'} thumb={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7b/12/15/with-newfound-confidence.jpg?w=500&h=300&s=1'}  img={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/255px-Flag_of_Estonia.svg.png'} />

        
        {/* <InfoCard date={'აგვ. 23, 2023'} heading={'შრომითი მიგრაცია 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard date={'ივლ. 12, 2023'} heading={'შრომითი მიგრაცია 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული ფოსტის სათაურის ველში მიუთითოთ'} />
        <InfoCard date={'მაი. 05, 2023'} heading={'შრომითი მიგრაცია 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} /> */}
      </div>
    </Container>

  )
}

export default Migration