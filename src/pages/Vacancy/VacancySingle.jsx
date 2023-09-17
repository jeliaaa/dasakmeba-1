import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './vacancy.scss'
const VacancySingle = () => {
    const { id } = useParams();
    const [interest, setInterest] = useState(false);
    return (
        <Container className='vac_con' style={{ backgroundColor: '#fff' }}>
            <Breadcrumbs />
            <div className='vacancy_single_wrapper'>
                <div className='vacancy_single_left'>
                    <div className="infos">
                        <div className='company_info'>
                            <h3>Company Company</h3>
                            <img src='https://picsum.photos/150' alt='...' />
                        </div>

                        {interest &&
                            <div className="accountant_info">
                                <div><i className='fa-solid fa-phone' /><p>555-54-78-36</p></div>
                                <div><i className='fa-solid fa-envelope' /><p>lorem.picsum@gmail.com</p></div>
                                <div><i className='fa-solid fa-address-book' /><p>John Doe</p></div>
                            </div>
                        }
                    </div>
                    <button onClick={() => {alert('successfully submitted'); setInterest(true)}} className='interested_btn'>Interested !</button>
                </div>
                <div className='vacancy_single_right'>
                    <div className='vacancy'>
                        <h2>Position</h2>
                        <section>
                            <p className='sal'><i className='fa-solid fa-coins'></i>Salary</p>
                            <p><i className='fa-solid fa-location'></i>Location</p>
                        </section>
                        <div className="two">
                            <span>N {id}</span>
                            <p>განაკვეთი : Shift</p>
                        </div>
                    </div>
                    <h4 className='address'>I.javakshishvili str. N62  /  Industry</h4>
                    <div className='description'>
                        <Container className='vac_con'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sapiente odio ullam quia explicabo iure voluptatem id veritatis esse fugit ipsam quibusdam amet, delectus perferendis nemo neque vero ab saepe?
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit reiciendis ad quia, aliquam quis quisquam unde debitis cumque quas commodi eius culpa quidem, voluptatum quos provident est neque veniam.s
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sapiente odio ullam quia explicabo iure voluptatem id veritatis esse fugit ipsam quibusdam amet, delectus perferendis nemo neque vero ab saepe?
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit reiciendis ad quia, aliquam quis quisquam unde debitis cumque quas commodi eius culpa quidem, voluptatum quos provident est neque veniam.s
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sapiente odio ullam quia explicabo iure voluptatem id veritatis esse fugit ipsam quibusdam amet, delectus perferendis nemo neque vero ab saepe?
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit reiciendis ad quia, aliquam quis quisquam unde debitis cumque quas commodi eius culpa quidem, voluptatum quos provident est neque veniam.s
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sapiente odio ullam quia explicabo iure voluptatem id veritatis esse fugit ipsam quibusdam amet, delectus perferendis nemo neque vero ab saepe?
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit reiciendis ad quia, aliquam quis quisquam unde debitis cumque quas commodi eius culpa quidem, voluptatum quos provident est neque veniam.s
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sapiente odio ullam quia explicabo iure voluptatem id veritatis esse fugit ipsam quibusdam amet, delectus perferendis nemo neque vero ab saepe?
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit reiciendis ad quia, aliquam quis quisquam unde debitis cumque quas commodi eius culpa quidem, voluptatum quos provident est neque veniam.s
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sapiente odio ullam quia explicabo iure voluptatem id veritatis esse fugit ipsam quibusdam amet, delectus perferendis nemo neque vero ab saepe?
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            <li>als</li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur odit reiciendis ad quia, aliquam quis quisquam unde debitis cumque quas commodi eius culpa quidem, voluptatum quos provident est neque veniam.s

                        </Container>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default VacancySingle