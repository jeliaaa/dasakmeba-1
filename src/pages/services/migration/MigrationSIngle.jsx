import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Accordion, Container } from 'react-bootstrap'
import { Typography } from '@mui/material'
import { QuestionMark } from '@mui/icons-material'

const MigrationSIngle = () => {
  return (
    <div className='cards_wrap'>
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
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> <div className='q_wrap'><QuestionMark /></div>  რას წარმოადგენს აჭარის დასაქმების სააგენტო?</Accordion.Header>
            <Accordion.Body>
              აჭარის ავტონომიური რესპუბლიკის დასაქმების სააგენტო არის საჯარო სამართლის იურიდიულ პირი,
              რომელიც შეიქმნა აჭარის ავტონომიური რესპუბლიკის მთავრობის 2011 წლის N43 დადგენილების
              საფუძველზე და შედის აჭარის ავტონომიური რესპუბლიკის ჯანმრთელობისა და სოციალური დაცვის
              სამინისტროს სისტემაში.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ მივიღოთ კონსულტაცია?</Accordion.Header>
            <Accordion.Body>
              რავიცი აბა, მარტივად, ერთი ზარით.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ გავაკეთოთ სალტო?</Accordion.Header>
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
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header><div className='q_wrap'><QuestionMark /></div> ვინ არის დირექტორი?</Accordion.Header>
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
  )
}

export default MigrationSIngle