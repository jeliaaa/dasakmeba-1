import React from 'react'
import '../../../pages/blog/profClassification/classification.scss'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Link as LinkOfDom } from 'react-router-dom'
import { Element } from 'react-scroll';

const StructureOfSite = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className='profs'>
        <Element name="a">
          <div>
            <h3>ჩვენს შესახებ</h3>
            <li><LinkOfDom to='1'>მთავარი ინფორმაცია</LinkOfDom></li>
            <li><LinkOfDom to='2'>ბრენდი</LinkOfDom></li>
            <li><LinkOfDom to='3'>პარტნიორები</LinkOfDom></li>
            <li><LinkOfDom to='3'>სტრუქტურა</LinkOfDom></li>
            <li><LinkOfDom to='3'>სტატისტიკა</LinkOfDom></li>
          </div>
        </Element>

        <Element name="b">
          <div>
            <h3>სერვისები</h3>
            <li><LinkOfDom to='1'>ჩვენი სერვისები</LinkOfDom></li>
            <li><LinkOfDom to='2'>პროექტები</LinkOfDom></li>
            <li><LinkOfDom to='3'>გრანტები და პროგრამები</LinkOfDom></li>
            <li><LinkOfDom to='3'>მიგრაცია</LinkOfDom></li>
          </div>
        </Element>

        <Element name="b">
          <div>
            <h3>შემეცნებითი ბლოგი</h3>
            <li><LinkOfDom to='1'>სტატიები</LinkOfDom></li>
            <li><LinkOfDom to='2'>გაკვეტთილები</LinkOfDom></li>
            <li><LinkOfDom to='3'>პროფესიოგრამა</LinkOfDom></li>
            <li><LinkOfDom to='3'>კალენდარი</LinkOfDom></li>
            <li><LinkOfDom to='3'>კლასიფიკაცია</LinkOfDom></li>
            <li><LinkOfDom to='3'>კვლევები</LinkOfDom></li>
          </div>
        </Element>

        <Element name="b">
          <div>
            <h3>მედია</h3>
            <li><LinkOfDom to='1'>გალერეა</LinkOfDom></li>
            <li><LinkOfDom to='2'>ახალი ამბები</LinkOfDom></li>
          </div>
        </Element>
        
        <Element name="b">
          <div>
            <h3>ვაკანსია</h3>
          </div>
        </Element>

        <Element name="b">
          <div>
            <h3>გზამკვლევი</h3>
            <li><LinkOfDom to='1'>კითხვა-პასუხი</LinkOfDom></li>
            <li><LinkOfDom to='2'>სარგებლობის ინსტრუქცია</LinkOfDom></li>
            <li><LinkOfDom to='2'>საიტის სტრუქტურა</LinkOfDom></li>
          </div>
        </Element>

        <Element name="b">
          <div>
            <h3>საჯარო ინფორმაცია</h3>
            <li><LinkOfDom to='1'>კანონმდებლობა</LinkOfDom></li>
            <li><LinkOfDom to='2'>საჯარო ინფორმაცია</LinkOfDom></li>
          </div>
        </Element>

      </div>

    </Container>
  )
}

export default StructureOfSite