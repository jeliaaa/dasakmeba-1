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
        <Element>
          <div>
            <h3>ჩვენს შესახებ</h3>
            <li><LinkOfDom target='_blank' to='/about/baseInfo'>მთავარი ინფორმაცია</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/about/brand'>ბრენდი</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/about/partners'>პარტნიორები</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/about/structure'>სტრუქტურა</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/about/statistics'>სტატისტიკა</LinkOfDom></li>
          </div>
        </Element>

        <Element>
          <div>
            <h3>სერვისები</h3>
            <li><LinkOfDom target='_blank' to='/services/projects'>პროექტები</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/services/grants'>გრანტები და პროგრამები</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/services/migration'>მიგრაცია</LinkOfDom></li>
          </div>
        </Element>

        <Element>
          <div>
            <h3>შემეცნებითი ბლოგი</h3>
            <li><LinkOfDom target='_blank' to='/blog/articles'>სტატიები</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/blog/vid-lessons'>გაკვეთილები</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/blog/profesiograma'>პროფესიოგრამა</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/blog/calendar'>კალენდარი</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/blog/classification'>კლასიფიკაცია</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/blog/researches'>კვლევები</LinkOfDom></li>
          </div>
        </Element>

        <Element>
          <div>
            <h3>მედია</h3>
            <li><LinkOfDom target='_blank' to='/media/gallery'>გალერეა</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/media/news'>ახალი ამბები</LinkOfDom></li>
          </div>
        </Element>
        
        <Element>
          <div>
            <h3>ვაკანსია</h3>
            <li><LinkOfDom target='_blank' to={"/vacancy"}>ვაკანსია</LinkOfDom></li>
          </div>
        </Element>

        <Element>
          <div>
            <h3>გზამკვლევი</h3>
            <li><LinkOfDom target='_blank' to='/guide/qA'>კითხვა-პასუხი</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/guide/userManual'>სარგებლობის ინსტრუქცია</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/guide/siteStructure'>საიტის სტრუქტურა</LinkOfDom></li>
          </div>
        </Element>

        <Element>
          <div>
            <h3>საჯარო ინფორმაცია</h3>
            <li><LinkOfDom target='_blank' to='/pubInfo/law'>კანონმდებლობა</LinkOfDom></li>
            <li><LinkOfDom target='_blank' to='/pubInfo/information'>საჯარო ინფორმაცია</LinkOfDom></li>
          </div>
        </Element>

      </div>

    </Container>
  )
}

export default StructureOfSite