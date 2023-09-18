import React from 'react'
import '../../../pages/blog/profClassification/classification.scss'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import {Link as LinkOfDom}  from 'react-router-dom'
import { Element } from 'react-scroll';


const Manual = () => {
    return (
        <Container style={{ backgroundColor: '#fff', padding: 30 }}>
            <Breadcrumbs />
            <div className='profs'>
                <Element name="a">
                    <div>
                        <h3>სატესტო სათაური</h3>
                        <li><LinkOfDom to='1'>ინსტრუქცია 1</LinkOfDom></li>
                        <li><LinkOfDom to='2'>ინსტრუქცია 2</LinkOfDom></li>
                        <li><LinkOfDom to='3'>ინსტრუქცია 3</LinkOfDom></li>
                    </div>
                </Element>

                <Element name="b">
                    <div>
                        <h3>სატესტო სათაური</h3>
                        <li><LinkOfDom to='1'>ინსტრუქცია 4</LinkOfDom></li>
                        <li><LinkOfDom to='2'>ინსტრუქცია 5</LinkOfDom></li>
                        <li><LinkOfDom to='3'>ინსტრუქცია 6</LinkOfDom></li>
                    </div>
                </Element>

            </div>

        </Container>
    )
}

export default Manual