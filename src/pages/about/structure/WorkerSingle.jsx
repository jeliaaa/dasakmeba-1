import React, { useEffect, useState } from 'react'
import { Accordion, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import './worker.scss'

const WorkerSingle = () => {
    const [worker, setWorker] = useState([]);
    const { id } = useParams();
    const { t } = useTranslation();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setWorker(data))
            .catch(err => console.error(err))
    })
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs />
            <Container className='worker_wrapper p-4'>
                <div className='worker_card'>
                    <div className='img_wrap'><img src='https://placehold.co/150' alt='...' /></div>
                    <div className='info'>
                        <div><h6>{t('nameSurname')}:</h6><h6>{worker.name}</h6><h6>პოზიცია : პოზიცია</h6></div>
                        <Container>
                            <div><i className="fa-solid fa-phone"></i>555-555-555</div>
                            <div><i className="fa-solid fa-envelope"></i>{worker.name}@hradjara.gov.ge</div>
                        </Container>
                    </div>
                </div>
                <div className='detailed_info'>
                    <div className='accordions_group'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>უფლებამოვალეობები</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>ააა</li>
                                        <li>აააბბ</li>
                                        <li>აააგგგგგგ</li>
                                        <li>აააალაფნსდჯფაკფჰლკაფჰ.აკნემსს</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>ბიოგრაფიული ცნობები</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                    <div className='accordions_group'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>განათლება</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>გამოცდილება</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default WorkerSingle