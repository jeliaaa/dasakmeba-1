import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Container } from 'react-bootstrap'
import { Typography } from '@mui/material'
import svg from '../../../assets/logos/genetic-data-svgrepo-com.svg'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react'

const MigrationSIngle = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <Container className='p-5'>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores distinctio error omnis quos nostrum sed obcaecati excepturi id! Assumenda nesciunt ex veritatis illo. Ex, at provident consectetur omnis consequatur fuga!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo molestiae quasi rem inventore deleniti nemo in. Ullam, rerum dolore aperiam amet commodi ab facere neque illum modi ut. Ipsum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus rerum quidem placeat! Suscipit ex nihil magni cum laboriosam autem laudantium quis, corrupti esse labore aliquam, at quaerat ipsa reiciendis nesciunt.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita alias nostrum, facilis labore maiores magni suscipit commodi modi exercitationem sunt optio in ullam aperiam! Explicabo quam fugit esse odio.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis nobis optio doloremque cumque voluptas qui incidunt error. Deleniti minus dolores perferendis, animi tempore eum minima quas dolore est ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores aspernatur eos cum, illum mollitia cumque aperiam tenetur amet! Deleniti doloribus cupiditate nihil obcaecati necessitatibus itaque odit inventore repellendus temporibus!
        </Typography>
      </Container>
      <div className='guide_wrapper w-100'>
        <ChakraProvider>
          <Accordion allowToggle className='accordion mt-5'>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1' style={{display:'flex', alignItems:'center', gap:10}}>
                    <img style={{width: 20}} src={svg} alt='...' />
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

export default MigrationSIngle