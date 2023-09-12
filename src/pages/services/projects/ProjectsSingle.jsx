import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './pr.scss'

function ProjectsSingle() {
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="pn">
            <Form.Label>Personal Number</Form.Label>
            <Form.Control type='number' placeholder="Personal num" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="tarigi">
            <Form.Label>Birth date</Form.Label>
            <Form.Control type='date' placeholder="date" />
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-3" >
          <Form.Label as="legend" column sm={2}>
            სქესი
          </Form.Label>
          <Col sm={10} style={{ display: 'flex', gap: 20 }}>
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
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mob">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type='number' placeholder="+995" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="secmob">
          <Form.Label>Reserve Mobile</Form.Label>
          <Form.Control type='number' placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="fosta">
          <Form.Label>email</Form.Label>
          <Form.Control type='email' placeholder="@" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type='date' />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  );
}

export default ProjectsSingle;