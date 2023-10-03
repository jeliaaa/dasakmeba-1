import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import "../../../media/news/News.scss"
import { Typography } from '@mui/material';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react';

const ForUsers = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
        <Container style={{ width: '80%', padding: 30 }}>
          <Typography>
            <h3>ელექტრონული სერვისების განვითარების მიზანი</h3>
            <p>სააგენტოს ელექტრონული სერვისების შემუშავება განხორციელდა მომსახურების ხარისხის გაზრდის მიზნით და ემსახურება დასაქმების სააგენტოში მოსახლეობის პირადი მომართვიანობის საჭიროების  შემცირებას,  თვითმომსახურების განვითარებას და მომსახურების ხარისხის ამაღლებას.
              სააგენტოს მიერ ადმინისტრირებადი შრომის ბაზრის მართვის ელექტრონული სისტემის დანერგვით სააგენტოს მიზანია დასაქმების ხელშეწყობის მიმართულებით სახელმწიფო სერვისების განვითარება, მოქალაქის/სამუშაოს მაძიებელთა, დამსაქმებელთა და საგანმანათლებლო  პროვაიდერ ორგანიზაციათა რეესტრის წარმოება და მუდმივი სრულყოფა,  აღნიშნული სისტემის მეშვეობით თვითმომსახურების განვითარება და სერვისების მარტივად სარგებლობის შესაძლებლობა.
              შრომის ბაზრის მართვის ელექტრონული სისტემის მეშვეობით დასაქმების სააგენტოს შესაძლებლობა ექნება განახორციელოს პროცესების დიაგნოსტიკა და მოახდინოს საჭიროების იდენტიფიცირება, რაც არსებული მომსახურების სრულყოფასა და განვითარებას შუწყობს ხელს.
            </p>
          </Typography>
        </Container>
        <ChakraProvider>
          <Accordion allowToggle className='accordion' style={{ width: '80%' }}>
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

export default ForUsers