import React from 'react'
import { Container, Table } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const statsData = [
    { id: 1, name: 'დადგენილება N1', date: '12.01.2021' },
    { id: 2, name: 'დადგენილება N2', date: '21.02.2021' },
    { id: 3, name: 'დადგენილება N3', date: '21.03.2021' },
    { id: 4, name: 'დადგენილება N4', date: '21.04.2021' }
]


const Dadgenilebebi = () => {
    const { t } = useTranslation();
    return (
        <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
            <Breadcrumbs></Breadcrumbs>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>{t('name')}</th>
                        <th>{t('date')}</th>
                        <th>{t('view')}</th>
                    </tr>
                </thead>
                <tbody>
                    {statsData.map((file) => (
                        <tr key={file.id}>
                            <td>{file.id}</td>
                            <td>{file.name}</td>
                            <td>{file.date}</td>
                            <td>{<Link to={`${file.id}`}>{file.name}</Link>}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    )
}

export default Dadgenilebebi