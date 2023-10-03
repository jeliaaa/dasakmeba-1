import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';
import './research.scss'
const ResearchSingle = () => {
    const {id} = useParams();
    return (
    <Container style={{backgroundColor: '#fff', padding: 30}}>
        <Breadcrumbs />
        <Container style={{backgroundColor: '#fff', padding: 30}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum sed vero, omnis a dolor perspiciatis soluta, molestias ratione, asperiores tempore numquam nostrum dignissimos minima? Eos, consequuntur!</p>
        </Container>
        <button className='pdf_download'><Link to={"/dummy.pdf"} target="_blank" download>გადმოწერა</Link></button>
    </Container>
  )
}

export default ResearchSingle