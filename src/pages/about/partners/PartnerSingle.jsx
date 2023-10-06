import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Container } from 'react-bootstrap'
import './partners.scss'
import { Link } from 'react-router-dom'

import ProfPif from '../../../assets/PartnerLogos/ProfMagniti.jpg'
import MagnitiLogo from '../../../assets/PartnerLogos/Magniti.jpg'


const PartnerSingle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className="partners_single">
        <div className='partner_main' >
          <img className='thumb' src={MagnitiLogo} alt="..." />
          <div className="img_wrap">
            <img src={ProfPif} alt="" />
            <div>
              <h4>მაგნიტი</h4>
              <p>საერთაშორისო პარტნიორი</p>
            </div>
          </div>
          <div className='info'>
            <div className="img_wrap_info">
              <div>
                <h4>Partner</h4>
                <p>type</p>
              </div>
            </div>
            <p className='description'>
              Spar Georgia მთელი ქვეყნის მასშტაბით 670-მდე მაღაზიით არის წარმოდგენილი და ერთ-ერთი უმსხვილესი დამსაქმებელია შრომის ბაზარზე, ამჟამად კომპანიას 2000 -ზე მეტი თანამშრომელი ჰყავს დასაქმებული.
            </p>
            <p>
              SPAR Georgia  მომხმარებელს სთავაზობს ევროპული პროდუქტების ყველაზე დიდ არჩევანს.  სხვადასხვა ექსკლუზიური ბრენდებისა და SPAR ბრენდით წარმოებული პროდუქტებისა და  ქვებრენდების ფართო ასორტიმენტს.  და ყოველთვიურად სააქციო ფასებს 500-ზე მეტ პროდუქტზე.
            </p>
          </div>
        </div>
        <div className='partner_contacts'>
          <h4>Contacts</h4>
          <ul>
            <li><i className='fa-solid fa-phone' /><p>55555555</p></li>
            <li><i className='fa-solid fa-envelope' /><p>johnDoe@gmail.com</p></li>
            <li><i className='fa-solid fa-globe' /><Link target="_blank" to={'https://wissol.ge'}>https://wissol.ge</Link></li>
            <li><i className='fa-solid fa-location-dot' /><p>ბათუმი, ჭავჭავაძის ქ. #120</p></li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default PartnerSingle