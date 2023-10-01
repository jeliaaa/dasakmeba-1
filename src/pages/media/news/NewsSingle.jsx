import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './News.scss'
import FacebookShareButton from '../../../ReusableComponents/fbShare/FacebookSharingButton';
const NewsSingle = () => {
    const { id } = useParams();
    return (
        <Container className='newsSingle_wrapper' style={{ backgroundColor: '#fff', padding: 30 }}>
            <Breadcrumbs />
            <div className='news_head'>
                <img src="https://picsum.photos/500/200" alt="" />
                <div>
                    <h2>სათაური სათაური სათაური</h2>
                    <h6>21.05.2023</h6>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto totam eveniet, molestiae, et nemo ducimus sequi voluptate minima libero quod aut consectetur fugiat sed perspiciatis doloremque. Pariatur ut dolore et!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto totam eveniet, molestiae, et nemo ducimus sequi voluptate minima libero quod aut consectetur fugiat sed perspiciatis doloremque. Pariatur ut dolore et!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto totam eveniet, molestiae, et nemo ducimus sequi voluptate minima libero quod aut consectetur fugiat sed perspiciatis doloremque. Pariatur ut dolore et!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto totam eveniet, molestiae, et nemo ducimus sequi voluptate minima libero quod aut consectetur fugiat sed perspiciatis doloremque. Pariatur ut dolore et!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto totam eveniet, molestiae, et nemo ducimus sequi voluptate minima libero quod aut consectetur fugiat sed perspiciatis doloremque. Pariatur ut dolore et!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo nobis, maiores, recusandae veniam sequi repellendus ipsam eos eius voluptatem id facilis ut laudantium iste adipisci enim architecto ea quaerat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis et soluta quae voluptate placeat rem ea eum nam harum, unde ex saepe! Corrupti ducimus enim incidunt natus saepe perferendis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rerum consectetur explicabo quos veniam harum cupiditate. Tenetur nam totam voluptate eveniet non, doloremque ut pariatur, eligendi omnis excepturi nihil rerum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eaque officiis impedit architecto in ipsa laboriosam, animi vero necessitatibus, commodi beatae enim labore eveniet esse? Neque corrupti odio fuga aut.
                </p>
            </div>
            <FacebookShareButton url={'https://hrajara.gov.ge'} />
        </Container>
    )
}

export default NewsSingle