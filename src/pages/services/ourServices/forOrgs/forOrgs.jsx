import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Typography } from '@mui/material';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react';

const ForOrgs = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
        <Container style={{ width: '80%', padding: 30 }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
          </Typography>
        </Container>
        <ChakraProvider>
          <Accordion allowToggle className='accordion' style={{width:'80%'}}>
            <AccordionItem>
              <h2>
                <AccordionButton>
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
            <AccordionItem>
              <h2>
                <AccordionButton>
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
            <AccordionItem>
              <h2>
                <AccordionButton>
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
            <AccordionItem>
              <h2>
                <AccordionButton>
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
        </ChakraProvider>
      </div>
    </Container>
  )
}

export default ForOrgs