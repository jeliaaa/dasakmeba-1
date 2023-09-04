import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "../../media/news/News.scss"
import ActiveTabs from '../../../ReusableComponents/activeTabs/ActiveTabs';

const Projects = () => {
  const tabs = [
    {
      id: 1, label: 'აქტიური', children:
        [
          <InfoCard id={1} date={'აგვ. 23, 2023'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
          <InfoCard id={2} date={'აგვ. 23, 2023'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
          <InfoCard id={3} date={'აგვ. 23, 2023'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        ]
    },
    {
      id: 2, label: 'შესრულებული', children:
        [
          <InfoCard id={4} date={'აგვ. 23, 2023'} heading={'პროექტები 4'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
          <InfoCard id={5} date={'აგვ. 23, 2023'} heading={'პროექტები 5'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
          <InfoCard id={6} date={'აგვ. 23, 2023'} heading={'პროექტები 6'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        ]
    },

  ]
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper'>
        <ActiveTabs tabs={tabs} />
        {/* 
        <InfoCard date={'აგვ. 23, 2023'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
        <InfoCard date={'ივლ. 12, 2023'} heading={'პროექტები 2'} thumbText={'გამოაგზავნოთ დოკუმენტაცია მოთხოვნილი ფორმით და ელექტრონული ფოსტის სათაურის ველში მიუთითოთ'} />
        <InfoCard date={'მაი. 05, 2023'} heading={'პროექტები 3'} thumbText={'პროფესიული განათლებისთვის“ ფარგლებში და მიზნად ისახავს კიბერუსაფრთხოების დარგში კვალიფიციური'} /> */}
      </div>
    </Container>

  )
}

export default Projects