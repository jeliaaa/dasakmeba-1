import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { QuestionMark } from '@mui/icons-material'

const QnA = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div className='guide_wrapper'>
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
        <Accordion>
          <Accordion.Item eventKey="4">
            <Accordion.Header><div className='q_wrap'><QuestionMark /></div>ვინ იყო შაჰ-აბასის დალაქი?</Accordion.Header>
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
          <Accordion.Item eventKey="5">
            <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ მივიღოთ კონსულტაცია?</Accordion.Header>
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
    </Container>
  )
}

export default QnA