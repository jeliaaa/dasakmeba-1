import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import svg from '../../../assets/logos/genetic-data-svgrepo-com.svg'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react'


import icon1 from '../../../assets/Icons/QnA/pie.png'
import icon2 from '../../../assets/Icons/QnA/presentation.png'
import icon3 from '../../../assets/Icons/QnA/puzzle.png'
import icon4 from '../../../assets/Icons/QnA/menu.png'



const QnA = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div className='guide_wrapper'>
        <ChakraProvider>
          <Accordion allowToggle className='accordion' >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    <div style={{ display: 'flex', gap: 20 }}>
                      <img style={{ width: 20 }} src={icon1} alt='...' />
                      რას წარმოადგენს აჭარის დასაქმების სააგენტო ?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                აჭარის დასაქმების სააგენტო წარმოადგენს ონლაინ რესურსს, რომელშიც თავმოყრილია ერთი ორი სამი ოთხი ხუთი ექვსი სიტყვები და ასე შემდეგ
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    <div style={{ display: 'flex', gap: 20 }}>
                      <img style={{ width: 20 }} src={icon2} alt='...' />
                      როგორ აღვადგინო პაროლი?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                თუკი დამავიწყდა პაროლი, მის აღსადგენად შევდივარ მოქალაქის პორტალზე მომხმარებლის სახელისა და პაროლის შესაყვან ფორმაში და ვაჭერ ბმულს - „დამავიწყდა პაროლი“.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    <div style={{ display: 'flex', gap: 20 }}>
                      <img style={{ width: 20 }} src={icon3} alt='...' />
                      რომელი პროგრამების გადმოწერა დამჭირდება მოქალაქის პორტალზე ახალი პირადობის მოწმობით რეგისტრაციისთვის ?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                მოქალაქის პორტალზე ახალი პირადობის მოწმობით რეგისტრაციისთვის დამჭირდება ბარათის წამკითხველი მოწყობილობისა და java პროგრამების გადმოწერა. ბარათის წამკითხველი მოწყობილობის გადმოსაწერი პროგრამა განთავსებულია ვებგვერდზე:
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    <div style={{ display: 'flex', gap: 20 }}>
                      <img style={{ width: 20 }} src={icon4} alt='...' />
                      სად შემიძლია ავიღო ახალი პირადობის მოწმობა?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                ახალი პირადობის მოწმობა შემიძლია ავიღო იუსტიციის სახლის ნებისმიერ ფილიალში.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ChakraProvider>
      </div>
    </Container>
  )
}

export default QnA