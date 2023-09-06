import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './classification.scss'
import {Link as LinkOfDom}  from 'react-router-dom'
import { Element, Link } from 'react-scroll';
const Classification = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;
  const scrollTop = () => {
    scroll.scrollToTop();
    setShowScrollToTop(false)
  }
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='classification_wrapper'>
        <button className={showScrollToTop ? 'scrollToTopBtn show' : 'scrollToTopBtn'} onClick={scrollTop}><i className='fa-solid fa-chevron-up' /></button>

        <div className="alphabet">
          <span><Link onClick={() => setShowScrollToTop(true)} to='a'>ა</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='b'>ბ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='g'>გ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='d'>დ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='e'>ე</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='v'>ვ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='z'>ზ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='th'>თ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='i'>ი</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='k'>კ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='l'>ლ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='m'>მ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='n'>ნ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='o'>ო</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='p'>პ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='jh'>ჟ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='r'>რ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='s'>ს</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='t'>ტ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='u'>უ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='f'>ფ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='q'>ქ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='gh'>ღ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='y'>ყ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='sh'>შ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='ch'>ჩ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='c'>ც</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='dz'>ძ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='w'>წ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='ch'>ჭ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='kh'>ხ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='j'>ჯ</Link></span>
          <span><Link onClick={() => setShowScrollToTop(true)} to='h'>ჰ</Link></span>
        </div>
        <div className='profs'>
          <Element name="a">
            <div>
              <h1>ა</h1>
              <li><LinkOfDom to='1'>არქიტექტორი</LinkOfDom></li>
              <li><LinkOfDom to='2'>ანიმატორი</LinkOfDom></li>
              <li><LinkOfDom to='3'>არბიტრი</LinkOfDom></li>
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
          <Element name="e">
            <div>
              <h1>ე</h1>
              <li>ე</li>
              <li>ეეეეეეე</li>
              <li>ეეეეეე</li>
              <li>ეეეეე</li>
              <li>დიეენოზავრი</li>
            </div>
          </Element>


        </div>

      </div>
    </Container>

  )
}

export default Classification