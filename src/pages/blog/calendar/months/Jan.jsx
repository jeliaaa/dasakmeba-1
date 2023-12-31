import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';
import '../calendar.scss'

const Jan = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: '8px' }}>
            <Breadcrumbs />
            <Accordion defaultActiveKey="0" flush style={{ width: '80%', border: '1px solid black' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>14 {t('jan')}</Accordion.Header>
                    <Accordion.Body>
                        ქართული თეატრის დღეს საფუძველი ჩაეყარა 1850 წლის 14 იანვარს, როდესაც თბილისში პირველი სპექტაკლი გიორგი ერისთავის „გაყრა“ დაიდგა.
                        ეს იყო პირველი და იმ დროისთვის ერთადერათი პროფესიული თეატრი საქართველოში.
                        <Link to={'1'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>26 {t('jan')}</Accordion.Header>
                    <Accordion.Body>
                    მწერლის საერთაშორისო დღე (World Day of the writer) აღინიშნება 3 მარტს პრაქტიკულად ყველა ქვეყანაში
                    <Link to={'2'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>31 {t('jan')}</Accordion.Header>
                    <Accordion.Body>
                    31 იანვარს მთელ მსოფლიოში პროფესიულ დღესასწაულს - იუველირთა საერთაშორისო დღეს - აღნიშნავენ ოსტატები, 
                    რომლებიც მშვენიერს ხდიან ჩვენს ცხოვრებას.  იუველირის პროფესია - ერთ-ერთი უძველესია, ადამიანებს თავის მორთვა ყოველთვის უყვარდათ.
                    <Link to={'3'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Jan