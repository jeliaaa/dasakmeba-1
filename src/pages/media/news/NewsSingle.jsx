import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './News.scss'
const NewsSingle = () => {
    const { id } = useParams();
    return (
        <Container className='newsSingle_wrapper' style={{ backgroundColor: '#fff' }}>
            <Breadcrumbs />
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '70px' }}>
                <img src="https://picsum.photos/200" alt="" />
                <div>
                    <h2>satauri satauri satauri</h2>
                    <h6>21.05.2023</h6>
                    <p></p>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto totam eveniet, molestiae, et nemo ducimus sequi voluptate minima libero quod aut consectetur fugiat sed perspiciatis doloremque. Pariatur ut dolore et!</p>
            </div>
        </Container>
    )
}

export default NewsSingle