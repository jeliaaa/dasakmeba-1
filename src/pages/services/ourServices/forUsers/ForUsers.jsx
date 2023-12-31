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
                    ელექტრონული რეგისტრაცია და საკუთარი პროფილის დამოუკიდებლად მართვის შესაძლებლობა
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>შრომის ბაზრის მართვის ელექტრონული სისტემა, სააგენტოს სერვისებით მოსარგებლე პარტნიორ ორგანიზაციებს/დამსაქმებლებს,  შესაძლებლობას აძლევს:</p>

                <ul>
                  <li>შექმნას და დისტანციურად მართოს საკუთარი პროფილი</li>
                  <li>სერვისების სარგებლობისათვის  გამოიყენოს ელექტრონული რესურსი</li>
                  <li>განათავსოს განაცხადი ვაკანსიის/სტაჟირების/მოხალისეობის, საგანმანათლებლო პროგრამების შესახებ</li>
                  <li>სააგენტოს თანამშრომელთა დახმარებით ოპერატიულად მოიძიოს ვაკანსიის მოთხოვნების გათვალისწინებით შესაბამისი კვალიფიციური კადრი</li>
                  <li>გაეცნოს საქართველოს შრომის ბაზარზე არსებული მდგომარეობის შესახებ ინფორმაციასა და ჩატარებული კვლევების შედეგებს და სურვილის შემთხვევაში  მიიღოს მონაწილეობა მსგავსი კვლევების ორგანიზება/ინიცირება/განხორციელებაში</li>

                </ul>

              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    ვაკანსია/სტაჟირება/მოხალისეობის შესახებ განაცხადის (ინფორმაციის) განთავსება
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>შრომის ბაზრის მართვის ელექტრონულ სისტემაში რეგისტრირებულ   ორგანიზაციებს/დამსაქმებლებს  მარტივი პროცედურების  გავლით შეუძლიათ განათავსონ განაცხადი:</p>
                <ul>
                  <li>არსებული ვაკანსიის  შესახებ და მოიძიონ შესაბამისი ადამიანური რესურსი- კონკრეტული მახასიათებლის მქონე თავისუფალ სამუშაოს ადგილის შესახებ ინფორმაციის განთავსებით სისტემაში რეგისტრირებულ აქტიურ სამუშაოს მაძიებლებს სასურველი სამუშაო ადგილის მოძიებისა და დასაქმების შესაძლელობა  ეზრდებათ. ერთიანობაში, დასაქმების ხელშეწყობა ერთის მხრივ, ორგანიზაციის კვალიფიციური ადამიანური კაპიტალით გაძლიერებას და მეორეს მხრივ, უმუშევრობის შემცირებას უწყობს ხელს. საერთო ჯამში კი, რეგიონის სოციალური-ეკონომიური მდგომარეობის გაუმჯობესება ხდება.</li>
                  <li>სტაჟირების შესახებ- რაც პრაქტიკული გამოცდილების შეძენის მსურველ მოქალაქეებს ეხმარება თეორიული ცონის გამოყენებით პროფესიისათვის საჭირო უნარ-ჩვევების გამომუშავებაში. სტაჟირების პროგრამის განხორციელებით ორგანიზაციები ხელს უწყობს შრომის ბაზრის გამდიდრებას მაღალ კვალიფიციური კადრებისთ  და ჯანსაღი კონკურენტუნარიანი გარემოს შექმნას</li>
                  <li>მოხალისეობის შესახებ -რაც საზოგადოებრივ საქმიანობაში აქტიური მონაწილეობის მსურველი მოქალაქეების ჩართულობას უწყობს ხელს. მოხალისეობრივი საქმიანობა ერთის მხრივ, მოქალაქეებისთვის პიროვნული განვითარების, საკუთარი უნარ ჩვევების უკეთ შეცნობის, სამოქალაქო საზოგადოების განვითარებაში წვლილის შეტანის და მნიშვნელოვანი სოციალური კაპიტალის დაგროვების შესაძლებლობას მიცემს, ხოლო მეორეს მხრივ განავითარებს ბაზარზე ოპერირებადი კომპანიების სოციალურ პასუხისმგებლობას - რაც მათ მეტ ატრაქტიულობას შესძენს</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    საგანმანათლებო პროგრამების შესახებ ინფორმაციის განთავსება
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>სააგენტოსთვის მნიშვნელოვანია ხელი შეუწყოს ერთის მხრივ სისტემაში რეგისტრირებული სამუშაოს მაძიებლების/მოქალაქეების პროფესიულ განვითარებას, ხოლო მეორეს მხრივ საგანმანათლებლო პროვაიდერებს/ორგანიზაციებს ფორმალური და არაფორმალური განათლების პოპულარიზაციაში. სწორედ ამიტომ, შრომის ბაზრის მართვის ელექტრონული სისტემის მეშვეობით, სააგენტო შესაძლებლობას აძლევს   სისტემაში რეგისტრირებულ საგანმანათლებლო პროვაიდერებს და სხვადასხვა ორგანიზაციებს განათავსონ ინფორმაცია მათ მიერ ორგანიზებული ტრენინგების, სემინარების, კონფერენციების შესახებ და სწრაფად მოიძიონ ამ პროგრამებში მონაწილეობის მსურველები.</p>
                <p>საგანმანათლებლო პროგრამებში მონაწილეობა, ხელს შეუწყობს მოქალაქეებს აიმაღლონ კვალიფიკაცია ადგილობრივი დასაქმების ბაზრის მოთხოვნების შესაბამისად. მრავალმხვრივი პროფესიული ზრდა მნიშვნელოვანი წინაპირობაა წარმატებული კარიერისთვის, როგორც საქართველოში ასევე ჩვენი ქვეყნის ფარგლებს გარეთ. შესაბამისად, საგანმანათლებლობლო პროექტების შეთავაზება და ამ პროექტებში ჩვენი მოქალაქეების ჩართულობის უზრუნველყოფა, დასაქმების სააგენტოს ერთ ერთი პრიორიტეტული ამოცანაა</p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='p-1'>
                    განაცხადის შესაბამისი ადამიანური რესურსების მოძიებაში ხელშეწყობა
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>შრომის ბაზრის მართვის ელექტრონული სისტემის მეშვეობით, ერთის მხრივ  ხდება სისტემაში განთავსებულ  ვაკანსიაზე, ვაკანსიის პირობების გათვალისწინებით შესაბამისი ადამიანური რესურსის შერჩევა, და ამასთანავე სისტემაში რეგისტრირებულ მოქალაქე/სამუშაოს მაძიებელს აქვს შესაძლებლობა გამოხატოს ინტერესი მისთვის სასურველ ვაკანსიაზე. შესაბამისად,  სამუშაოს ძებნა ელექტრონული სისტემის მეშვეობით ხდება უფრო მოქნილი და შედეგზე ორიენტირებული.  აღსანიშნავია ის, რომ სააგენტომ დანერგა განცხადების შესაბამის მოთხოვნაზე მორგებული ადამიანური რესურსის შერჩევის ავტომატური შერჩევის ინოვაციური მეთოდი, რაც მნიშვნელოვნად ამცირებს დროის დანაკარგს და აუმჯობესებს ვაკანსიაზე მუშაობის პროცესსა და შედეგს.</p>
                <p>ორგანიზაცია/დამსაქმებელი დროისა და სურვილის გათვალისწინებით, თავად ირჩევს სერვისის მიწოდების ფორმას - თავად ახორციელებს ადამიანური რესურსის შერჩევას იმ სამუშაოს მაძიებელთაგან, რომლებიც აკმაყოფილებს ვაკანსიის მოთხოვნებს, ან სარგებლობს სააგენტოს კვალიფიციური თანამშრომლების დახმარებით.</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ChakraProvider>
      </div>
    </Container>
  )
}

export default ForUsers