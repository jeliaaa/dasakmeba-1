import React from 'react'
import { Accordion, Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../calendar.scss'


const Mar = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: '8px' }}>
      <Breadcrumbs />
      <Accordion defaultActiveKey="0" flush style={{ width: '80%', border: '1px solid black' }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>3 {t('mar')}</Accordion.Header>
          <Accordion.Body>
            ქართული თეატრის დღეს საფუძველი ჩაეყარა 1850 წლის 14 იანვარს, როდესაც თბილისში პირველი სპექტაკლი გიორგი ერისთავის „გაყრა“ დაიდგა.
            ეს იყო პირველი და იმ დროისთვის ერთადერათი პროფესიული თეატრი საქართველოში.
            <Link to={'1'}>ვრცლად</Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>6 {t('mar')}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Link to={'2'}>ვრცლად</Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>9 {t('mar')}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Link to={'3'}>ვრცლად</Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>21 {t('mar')}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Link to={'4'}>ვრცლად</Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>22 {t('mar')}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Link to={'5'}>ვრცლად</Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
          <Accordion.Header>27 {t('mar')}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Link to={'6'}>ვრცლად</Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Mar