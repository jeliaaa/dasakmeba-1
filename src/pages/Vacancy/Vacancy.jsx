import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import vacData from './VacancyData.json'
import { pink, yellow } from '@mui/material/colors';
import './vacancy.scss'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';

const Vacancy = () => {
    const { t } = useTranslation();
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [active, setActive] = useState([]);
    const handleClick = (num) => {
        setActive(prevState =>
            prevState.includes(num)
                ? prevState.filter(item => item !== num)
                : [...prevState, num]
        );
        active.includes(num) && setSelectedIndustries([])
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
            <div className='vacancy_container' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <FormControl className='filter_main' component={'fieldset'} >
                    <FormControlLabel
                        value={t('conference')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }}
                            onClick={() => handleClick(1)} />}
                        label={t('conference')}
                        labelPlacement="start"
                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('employement')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(2) }} />}
                        label={t('employement')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('familyWork')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(3) }} />}
                        label={t('familyWork')}
                        labelPlacement="start"
                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('internship')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(4) }} />}
                        label={t('internship')}
                        labelPlacement="start"
                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('lectures')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(5) }} />}
                        label={t('lectures')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('professional')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(6) }} />}
                        label={t('professional')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('trainings')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(7) }} />}
                        label={t('trainings')}
                        labelPlacement="start"

                    />
                </FormControl>
                <FormControl className='filter_main' component={'fieldset'}>
                    <FormControlLabel
                        value={t('volunteering')}
                        control={<Checkbox sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }} onClick={() => { handleClick(8) }} />}
                        label={t('volunteering')}
                        labelPlacement="start"

                    />
                </FormControl>


            </div>
            <div className='filter_bottom'>
                <div style={{ width: '90%', display: 'flex', flexWrap: 'wrap' }}>

                    {filteredVacancies.map((vacancy) => (
                        vacancy.industries && (
                            Object.keys(vacancy.industries).map((industryKey) => (
                                <FormControl className='vacancy_filter' component={'fieldset'} key={industryKey}>
                                    <p>{vacancy.parent}</p>
                                    <p className='quantity'>{vacancy.industries[industryKey].quantity}</p>
                                    <FormControlLabel
                                        value={t(`${vacancy.industries[industryKey].name}`)}
                                        control={<Checkbox sx={{
                                            color: pink[800],
                                            '&.Mui-checked': {
                                                color: pink[600],
                                            },
                                        }} onChange={() => { handleCheckboxChange(vacancy.industries[industryKey]) }}
                                        />}
                                        label={t(`${vacancy.industries[industryKey].name}`)}
                                        labelPlacement="start"
                                    />
                                </FormControl>
                            ))
                        )

                    ))}

                </div>
            </div>
            <div className='w-100 mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {
                    selectedIndustries.map((vac) => {
                        return (
                            Object.values(vac.vacancies).map((v, index) => {
                                return (<div key={index} className='vacancy'>
                                    <img src='https://picsum.photos/100' alt='...' />
                                    <div className='one'>
                                        <h2>{v.Position}</h2>
                                        <section>
                                            <p className='sal'><i className='fa-solid fa-coins'></i>{v.Salary}</p>
                                            <p><i className='fa-solid fa-location'></i>{v.Location}</p>
                                        </section>
                                    </div>
                                    <div className="two">
                                        <p>განაკვეთი : {v.Shift}</p>
                                    </div>
                                </div>)
                            })
                        )
                    })
                }
            </div>

        </div>
    )
}

export default React.memo(Vacancy)