import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './classification.scss'
import { Element, Link } from 'react-scroll';
const Classification = () => {

  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='classification_wrapper'>
        <div className='profs' style={{ width: '80vw' }}>
          <Element name="a">
            <div>
              <h1>ა</h1>
              <li>არქიტექტორი</li>
              <li>ანიმატორი</li>
              <li>არბიტრი</li>
            </div>
          </Element>
          <Element name="b">
            <div>
              <h1>ბ</h1>
              <li>ბოტანიკოსი</li>
              <li>ბავშვის მოვლელი</li>
              <li>ბიოლოგი</li>
            </div>
          </Element>
          <Element name="g">
            <div>
              <h1>გ</h1>
              <li>გეოლოგი</li>
              <li>გემწამყვანი</li>
              <li>გაყიდვების მენეჯერი</li>
              <li>გენერალური დირექტორი</li>
              <li>გაზქურა</li>
            </div>
          </Element>
          <Element name="d">
          <div>
              <h1>დ</h1>
              <li>დენტისტი</li>
              <li>დალაქი</li>
              <li>დისტრიბუტორი</li>
              <li>დირექტორი</li>
              <li>დინოზავრი</li>
            </div>
          </Element>


        </div>
        <div className="alphabet" style={{ display: 'flex', flexDirection: 'column' }}>
          <span><Link to='a'>ა</Link></span>
          <span><Link to='b'>ბ</Link></span>
          <span><Link to='g'>გ</Link></span>
          <span><Link to='d'>დ</Link></span>
          <span><Link to='e'>ე</Link></span>
          <span><Link to='v'>ვ</Link></span>
          <span><Link to='z'>ზ</Link></span>
          <span><Link to='th'>თ</Link></span>
          <span><Link to='i'>ი</Link></span>
          <span><Link to='k'>კ</Link></span>
          <span><Link to='l'>ლ</Link></span>
          <span><Link to='m'>მ</Link></span>
          <span><Link to='n'>ნ</Link></span>
          <span><Link to='o'>ო</Link></span>
          <span><Link to='p'>პ</Link></span>
          <span><Link to='jh'>ჟ</Link></span>
          <span><Link to='r'>რ</Link></span>
          <span><Link to='s'>ს</Link></span>
          <span><Link to='t'>ტ</Link></span>
          <span><Link to='u'>უ</Link></span>
          <span><Link to='f'>ფ</Link></span>
          <span><Link to='q'>ქ</Link></span>
          <span><Link to='gh'>ღ</Link></span>
          <span><Link to='y'>ყ</Link></span>
          <span><Link to='sh'>შ</Link></span>
          <span><Link to='ch'>ჩ</Link></span>
          <span><Link to='c'>ც</Link></span>
          <span><Link to='dz'>ძ</Link></span>
          <span><Link to='w'>წ</Link></span>
          <span><Link to='ch'>ჭ</Link></span>
          <span><Link to='kh'>ხ</Link></span>
          <span><Link to='j'>ჯ</Link></span>
          <span><Link to='h'>ჰ</Link></span>
        </div>
      </div>
    </Container>

  )
}

export default Classification