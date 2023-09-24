import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';
import '../calendar.scss'

const July = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20, borderRadius: '8px' }}>
            <Breadcrumbs />
            <Accordion defaultActiveKey="0" flush style={{ width: '80%', border: '1px solid black' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>2 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        ქართული თეატრის დღეს საფუძველი ჩაეყარა 1850 წლის 14 იანვარს, როდესაც თბილისში პირველი სპექტაკლი გიორგი ერისთავის „გაყრა“ დაიდგა.
                        ეს იყო პირველი და იმ დროისთვის ერთადერათი პროფესიული თეატრი საქართველოში.
                        <Link to={'1'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>10 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        მწერლის საერთაშორისო დღე (World Day of the writer) აღინიშნება 3 მარტს პრაქტიკულად ყველა ქვეყანაში
                        <Link to={'2'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>11 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        31 იანვარს მთელ მსოფლიოში პროფესიულ დღესასწაულს - იუველირთა საერთაშორისო დღეს - აღნიშნავენ ოსტატები,
                        რომლებიც მშვენიერს ხდიან ჩვენს ცხოვრებას.  იუველირის პროფესია - ერთ-ერთი უძველესია, ადამიანებს თავის მორთვა ყოველთვის უყვარდათ.
                        <Link to={'3'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>12 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        31 იანვარს მთელ მსოფლიოში პროფესიულ დღესასწაულს - იუველირთა საერთაშორისო დღეს - აღნიშნავენ ოსტატები,
                        რომლებიც მშვენიერს ხდიან ჩვენს ცხოვრებას.  იუველირის პროფესია - ერთ-ერთი უძველესია, ადამიანებს თავის მორთვა ყოველთვის უყვარდათ.
                        <Link to={'4'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>20 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        31 იანვარს მთელ მსოფლიოში პროფესიულ დღესასწაულს - იუველირთა საერთაშორისო დღეს - აღნიშნავენ ოსტატები,
                        რომლებიც მშვენიერს ხდიან ჩვენს ცხოვრებას.  იუველირის პროფესია - ერთ-ერთი უძველესია, ადამიანებს თავის მორთვა ყოველთვის უყვარდათ.
                        <Link to={'5'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>25 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        31 იანვარს მთელ მსოფლიოში პროფესიულ დღესასწაულს - იუველირთა საერთაშორისო დღეს - აღნიშნავენ ოსტატები,
                        რომლებიც მშვენიერს ხდიან ჩვენს ცხოვრებას.  იუველირის პროფესია - ერთ-ერთი უძველესია, ადამიანებს თავის მორთვა ყოველთვის უყვარდათ.
                        <Link to={'6'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>29 {t('jul')}</Accordion.Header>
                    <Accordion.Body>
                        31 იანვარს მთელ მსოფლიოში პროფესიულ დღესასწაულს - იუველირთა საერთაშორისო დღეს - აღნიშნავენ ოსტატები,
                        რომლებიც მშვენიერს ხდიან ჩვენს ცხოვრებას.  იუველირის პროფესია - ერთ-ერთი უძველესია, ადამიანებს თავის მორთვა ყოველთვის უყვარდათ.
                        <Link to={'7'}>ვრცლად</Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default July