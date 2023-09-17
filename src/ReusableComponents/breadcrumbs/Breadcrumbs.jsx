import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'
import { useTranslation } from 'react-i18next'
import BackBtn from '../backBtn/BackBtn'
const Breadcrumbs = () => {
    const { t } = useTranslation();
    var p = window.location.pathname;
    var crumbs = p.split('/');
    crumbs.splice(0, 1);
    return (
        <nav className='breadcrumbs_wrapper'>
            <Breadcrumb>
                <Breadcrumb.Item><Link to={'/main'}>{t('main')}</Link></Breadcrumb.Item>
                {crumbs.map((crumb, index) => (
                    <Breadcrumb.Item key={index} active={index === crumbs.length - 1}>
                        {crumbs.length === 3 && index === 0 ? (
                            <Link to={`/${crumb}`}>{t(crumb)}</Link>
                        ) : crumbs.length === 3 && index === 1 ? (
                            <Link to={`/${crumbs[0]}/${crumb}`}>{t(crumb)}</Link>
                        ) : crumbs.length === 2 && index === 0 ? (
                            <Link to={`/${crumb}`}>{t(crumb)}</Link>
                        ): crumbs.length === 4 && index === 0 ? (
                            <Link to={`/${crumb}`}>{t(crumb)}</Link>
                        ) : crumbs.length === 4 && index === 1 ? (
                            <Link to={`/${crumbs[0]}/${crumb}`}>{t(crumb)}</Link>
                        ) : crumbs.length === 4 && index === 2 ? (
                            <Link to={`/${crumbs[0]}/${crumbs[1]}/${crumb}`}>{t(crumb)}</Link>
                        ) : index >= 3 ? (
                            ''
                        ) : t(crumb)}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
            <BackBtn />
        </nav>
    )
}

export default Breadcrumbs