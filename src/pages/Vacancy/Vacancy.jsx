import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import vacData from './VacancyData.json'
import './vacancy.scss'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

const Vacancy = () => {
    const { t } = useTranslation();
    const vacFilter = useRef(null);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [active, setActive] = useState([]);

    const handleClick = (num) => {
        setActive(prevState =>
            prevState.includes(num)
                ? prevState.filter(item => item !== num)
                : [...prevState, num]
        );
        active.includes(num) && setSelectedIndustries([])

        let childrenOfVacFilter = Array.from(vacFilter.current.children);
        active.includes(num) && childrenOfVacFilter.forEach((child) => child.classList.remove('active'));
    };
    const handleCheckboxChange = (vacancyId) => {
        if (selectedIndustries.includes(vacancyId)) {
            setSelectedIndustries(selectedIndustries.filter(id => id !== vacancyId));
        } else {
            setSelectedIndustries([...selectedIndustries, vacancyId]);
        }
    };
    const filteredVacancies = vacData.filter(vacancy => active.includes(vacancy.type));
    return (
        <div className='vacancy_wrapper'>
            <Breadcrumbs />
            <div className='vacancy_container' style={{ alignSelf: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', width: '90%' }}>
                <h3>{t('employement')}</h3>
                <div>
                    <div className='filter_upper' onClick={(e) => { handleClick(1); e.target.classList.toggle('active') }}>{t('conference')}</div>
                    <div className='filter_upper' onClick={(e) => { handleClick(2); e.target.classList.toggle('active') }}>{t('employement')}</div>
                    <div className='filter_upper' onClick={(e) => { handleClick(3); e.target.classList.toggle('active') }}>{t('familyWork')}</div>
                    <div className='filter_upper' onClick={(e) => { handleClick(4); e.target.classList.toggle('active') }}>{t('internship')}</div>
                </div>
                <h3>{t('educational')}</h3>
                <div>
                    <div className='filter_upper' onClick={(e) => { handleClick(5); e.target.classList.toggle('active') }}>{t('lectures')}</div>
                    <div className='filter_upper' onClick={(e) => { handleClick(6); e.target.classList.toggle('active') }}>{t('professional')}</div>
                    <div className='filter_upper' onClick={(e) => { handleClick(7); e.target.classList.toggle('active') }}>{t('trainings')}</div>
                    <div className='filter_upper' onClick={(e) => { handleClick(8); e.target.classList.toggle('active') }}>{t('volunteering')}</div>
                </div>

            </div>
            <div className='filter_bottom'>
                <div ref={vacFilter} style={{ width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                    {filteredVacancies.map((vacancy) => (
                        vacancy.industries && (
                            Object.keys(vacancy.industries).map((industryKey) => (
                                <div className='vacancy_filter' onClick={(e) => { handleCheckboxChange(vacancy.industries[industryKey]); e.currentTarget.classList.toggle('active') }}>
                                    <h6>{vacancy.industries[industryKey].name}</h6>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p>{vacancy.parent}</p>
                                        <p className='quantity'>{vacancy.industries[industryKey].quantity}</p>

                                    </div>
                                </div>

                            ))
                        )

                    ))}

                </div>
            </div>
            <div className='w-100 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 25 }}>
                {
                    selectedIndustries.map((vac) => {
                        return (
                            Object.values(vac.vacancies).map((v, index) => {
                                return (
                                    <Link className='vacancy_wrapper_a' to={`${v.id}`}>
                                        <div key={index} className='vacancy'>
                                            <img src={`https://picsum.photos/id/${v.id}/100`} alt='...' />
                                            <div className='one'>
                                                <h2>{v.Position}</h2>
                                                <section>
                                                    <p className='sal'><i className='fa-solid fa-coins'></i>{v.Salary}</p>
                                                    <p><i className='fa-solid fa-location'></i>{v.Location}</p>
                                                    <p className='industryTxt'>{v.industry}</p>
                                                </section>
                                            </div>
                                            <div className="two">
                                                <p>განაკვეთი : {v.Shift}</p>
                                            </div>
                                        </div>
                                    </Link>)
                            })
                        )
                    })
                }
            </div>

        </div>
    )
}

export default React.memo(Vacancy)