import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Container } from 'react-bootstrap'
import './partners.scss'
import { Link } from 'react-router-dom'

const PartnerSingle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className="partners_single">
        <div className='partner_main' >
          <img className='thumb' src="https://picsum.photos/300/50" alt="..." />
          <div className="img_wrap">
            <img src="https://picsum.photos/100" alt="" />
            <div>
              <h4>Partner</h4>
              <p>type</p>
            </div>
          </div>
          <div className='info'>
            <div className="img_wrap_info">
              <img src="https://picsum.photos/100" alt="" />
              <div>
                <h4>Partner</h4>
                <p>type</p>
              </div>
            </div>
            <p className='description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo alias saepe eveniet asperiores maiores rerum placeat voluptatum excepturi pariatur repellendus provident nisi sit rem neque ducimus dicta, cum reiciendis in?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus accusantium possimus aspernatur. Soluta, tenetur! Numquam laudantium fuga, harum vitae, debitis ipsam dolores porro minus, est quis optio in? Alias?
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