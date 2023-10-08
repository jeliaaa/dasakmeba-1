import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import './worker.scss'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import svg from '../../../assets/logos/genetic-data-svgrepo-com.svg'

import puzzle from '../../../assets/Icons/About/puzzle.png'
import user from '../../../assets/Icons/About/user.png'
import education from '../../../assets/Icons/About/education.png'
import experience from '../../../assets/Icons/About/letter.png'



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
                <ChakraProvider>
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
                            <Accordion className='accordion' allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <img style={{ width: 30 }} src={puzzle} />
                                            <Box as="span" flex='1' textAlign='left' className='p-1'>
                                                უფლებამოვალეობები
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <ul>
                                            <li>amslmlklkdsfamaf;mam</li>
                                            <li>amslmlklkdsfamaf;mam</li>
                                            <li>amslmlklkdsfamaf;mam</li>
                                            <li>amslmlklkdsfamaf;mam</li>
                                        </ul>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className='accordion' allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <img style={{ width: 30 }} src={user} />
                                            <Box as="span" flex='1' textAlign='left' className='p-1'>
                                                ბიოგრაფიული ცნობები
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className='accordions_group'>
                            <Accordion className='accordion' allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <img style={{ width: 30 }} src={education} />

                                            <Box as="span" flex='1' textAlign='left' className='p-1'>
                                                განათლება
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className='accordion' allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <img style={{ width: 30 }} src={experience} />

                                            <Box as="span" flex='1' textAlign='left' className='p-1'>
                                                გამოცდილება
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </ChakraProvider>
            </Container>
        </Container >
    )
}

export default WorkerSingle