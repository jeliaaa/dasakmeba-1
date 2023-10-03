import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../calendar.scss'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react';

const Apr = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: '8px' }}>
      <Breadcrumbs />
      <ChakraProvider>
        <Accordion allowToggle className='accordion' style={{ width: '80%' }}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className='p-1'>
                  3 აპრილი
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              <Link to={'1'}>ვრცლად</Link>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className='p-1'>
                  7 აპრილი
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              <Link to={'2'}>ვრცლად</Link>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className='p-1'>
                  9 აპრილი
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              <Link to={'3'}>ვრცლად</Link>
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className='p-1'>
                  14 აპრილი
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              <Link to={'4'}>ვრცლად</Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ChakraProvider>
    </Container>
  )
}

export default Apr