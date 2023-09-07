import React from 'react'
import { Accordion, Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import "../../../media/news/News.scss"
import { Typography } from '@mui/material';

const ForUsers = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <div className='news_wrapper' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
        <Container style={{ width: '80%', padding: 30 }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum pariatur magni et modi placeat tempora quas neque architecto nulla fugiat rerum quaerat, ratione a culpa ad voluptatibus magnam debitis?
          </Typography>
        </Container>
        <Accordion defaultActiveKey="0" flush style={{ width: '80%', border: '1px solid black' }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>bla</Accordion.Header>
            <Accordion.Body>
              ქართული თეატრის დღეს საფუძველი ჩაეყარა 1850 წლის 14 იანვარს, როდესაც თბილისში პირველი სპექტაკლი გიორგი ერისთავის „გაყრა“ დაიდგა.
              ეს იყო პირველი და იმ დროისთვის ერთადერათი პროფესიული თეატრი საქართველოში.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>blablal</Accordion.Header>
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
          <Accordion.Item eventKey='2'>
            <Accordion.Header>blblbl</Accordion.Header>
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
          <Accordion.Item eventKey='3'>
            <Accordion.Header>hooho</Accordion.Header>
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
          <Accordion.Item eventKey='4'>
            <Accordion.Header>ikisaqve</Accordion.Header>
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

export default ForUsers