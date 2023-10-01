import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'

const ProjectsSingleForm = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>სახელი</Form.Label>
            <Form.Control placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>გვარი</Form.Label>
            <Form.Control placeholder="Password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="pn">
            <Form.Label>პირადი ნომერი</Form.Label>
            <Form.Control type='number' />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="tarigi">
            <Form.Label>დაბადების თარიღი</Form.Label>
            <Form.Control type='date' placeholder="date" />
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label as="legend" column sm={12} className='text-center'>
            სქესი
          </Form.Label>
          <Col sm={12} style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <Form.Check
              type="radio"
              label="მამრ."
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="მდედრ."
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>იურიდიული მისამართი</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>ფაქტობრივი მისამართი</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mob">
          <Form.Label>მობილური</Form.Label>
          <Form.Control type='number' placeholder="+995" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="secmob">
          <Form.Label>სათადარიგო ნომერი</Form.Label>
          <Form.Control type='number' placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="fosta">
          <Form.Label>ელ. ფოსტა</Form.Label>
          <Form.Control type='email' placeholder="@" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fosta">
          <Form.Label>სათადარიგო ფოსტა</Form.Label>
          <Form.Control type='email' placeholder="@" />
        </Form.Group>
        <Form.Group controlId="formGridState">
          <Form.Label>ჯგუფი რომელსაც მიეკუთვნებით</Form.Label>
          <Form.Select defaultValue={0}>
            <option value={0}>აირჩიეთ...</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label as="legend" column sm={12} className='text-center'>
            ამჟამინდელი სტატუსი
          </Form.Label>
          <Col sm={12} style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <Form.Check
              type="radio"
              label="უმუშევარი"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="დასაქმებული"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label as="legend" column sm={12} className='text-center'>
            ენების ცოდნა
          </Form.Label>
          <Form.Select defaultValue={0}>
            <option value={0}>ინგლისური</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </Form.Select>

          <Form.Select defaultValue={0}>
            <option value={0}>რუსული</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </Form.Select>



          <Form.Group as={Col} controlId="formGridZip" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Form.Label>სამოტივაციო წერილი</Form.Label>
            <textarea className='w-100' placeholder=''></textarea>
          </Form.Group>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default ProjectsSingleForm