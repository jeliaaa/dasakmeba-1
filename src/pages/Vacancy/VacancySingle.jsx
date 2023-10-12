import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './vacancy.scss'

import svg from '../../assets/logos/genetic-data-svgrepo-com.svg'
import arrow from '../../assets/arrow.png'
import money from '../../assets/money 1.png'


import Logo from '../../assets/VacancyLogo.jpg'
const VacancySingle = () => {
    const { id } = useParams();
    const [interest, setInterest] = useState(false);
    return (
        <Container className='vac_con' style={{ backgroundColor: '#fff' }}>
            <Breadcrumbs />
            {/* <div className='vacancy_single_wrapper'>
                <div className='vacancy_single_left'>
                    <div className="infos">
                        <div className='company_info'>
                            <img src={Logo} alt='...' />
                            <h3>ავერსი ფარმა</h3>
                        </div>
                        {interest && <div className="accountant_info">
                            <div><img style={{ width: 20 }} src={svg} /><p>555-54-78-36</p></div>
                            <div><i className='fa-solid fa-envelope' /><p>natia.chochua@aversi.ge</p></div>
                            <div><i className='fa-solid fa-address-book' /><p>ოპერატორის სახელი</p></div>
                        </div>}
                    </div>
                    <button onClick={() => { alert('successfully submitted'); setInterest(true) }} className='interested_btn'>დაინტერესება</button>
                </div>
                <div className='vacancy_single_right'>
                    <div className='vacancy'>
                        <h2>ბუღალტერი</h2>
                        <h4 className='address'>ქ.ბათუმი ჯავახიშვილის 94</h4>
                        <section>
                            <p className='sal'><i className='fa-solid fa-coins'></i>1000</p>
                            <p><i className='fa-solid fa-location'></i>ხელვაჩაური</p>
                            <p><i className='fa-solid fa-clipboard'></i>ფინანსები</p>
                        </section>
                        <div className="two">
                            <span><i className='fa-solid fa-id-card'></i>ID:{id}</span>
                            <p></p>
                            <p><img style={{ width: 20 }} src={svg} />სრული განაკვეთი</p>
                        </div>
                        
                    </div>
                </div>
            </div> */}
            <div className='companyInfo container'>
                <div className='parent-div'>
                    <div className='company-photo'>
                        <div>
                            <img src={Logo} alt='...' />
                        </div>
                    </div>
                    <div className='company-info'>
                        <div>
                            <p>კომპანია "MINISO" აცხადებს ვაკანსიას ექსტერიერ/მარკეტინგის პოზიციაზე</p>
                            <h1 className='left-border'>ძირითადი მოვალეობები</h1>
                            <ul>
                                <li>ინტერიერ/ექსტერიერის დიზაინი</li>
                                <li>ავეჯის დიზაინი</li>
                                <li>სარეკლამო სივრცის დაგეგმარება</li>
                                <li>მასალების სელექცია და დიზაინი</li>
                                <li>სატესტო ველი ჯობ დესქრიფშენში</li>
                            </ul>
                            <span className='d-flex justify-content-end'>
                                <button disabled="disabled"><img style={{ width: 40 }} src={money} />1500₾</button>
                            </span>
                        </div>
                    </div>
                    <div className='description'>
                        <Container className='vac_con'>
                            <div className='info-div'>
                                <h2 className='left-border'>საკვალიფიკაციო მოთხოვნები</h2>
                                <ul>
                                    <li>უმაღლესი ეკონომიური განათლება </li>
                                    <li>მსგავს პოზიციაზე მუშაობის მინიმუმ 2 წლიანი გამოცდილება </li>
                                    <li>1C ERP სისტემის ცოდნა და მასში ბუღალტერიის წარმოების გამოცდილება</li>
                                    <li>საქართველოს და საერთაშორისო საბუღალტრო სტანდარტების და წესების ცოდნა </li>
                                    <li>სასურველია პროგრამა დარიექსის ცოდნა</li>
                                    <li>ფინანსური აღრიცხვის საერთაშორისო სტანდარტების ცოდნა</li>
                                    <li>საქართველოს საგადასახადო კოდექსისა და შესაბამისი ნორმატიული აქტების ცოდნა</li>
                                    <li>კომუნიკაბელურობა</li>
                                    <li>პუნქტუალურობა, ორგანიზებულობა, მიზანდასახულობა, თვითგანვითარებისაკენ სწრაფვა. გუნდის მართვის უნარი</li>
                                    <li>კრიტიკულ სიტუაციებში ორიენტაციის და გადაწყვეტილების მიღების უნარი</li>
                                </ul>
                            </div>
                            <div className='info-div'>
                                <h2 className='left-border'>საკვალიფიკაციო საჭირო მოთხოვნები</h2>
                                <p>
                                    დაინტერესებულმა პირებმა გთხოვთ გამოგზავნოთ CV ელექტრონული ფოსტით
                                    მისამართზე vacancy@aversi.ge ან წარმოადგინოთ საბუთები 11.00სთ-დან 15.00სთ-მდე
                                </p>
                                <ul>
                                    <li>ფოტოსურათი 3X4 1ც.</li>
                                    <li>დიპლომის ასლი</li>
                                    <li>პირადობის მოწმობის ასლი</li>
                                    <li>სარეკომენდაციო წერილები მისამართზე</li>
                                </ul>
                            </div>
                            <div className='info-div'>
                                <p>
                                    მისამართზე: ქ. თბილისი, ა. ყაზბეგის 16;
                                    ტელ: 2 506 506 (შიდა ნომერი 1575);
                                    განაცხადის შემოტანის ბოლო ვადა: 15.10,2023 წელი. გთხოვთ, წერილის სათაურში
                                    მიუთითოთ ვაკანსიის დასახელება. წინააღმდეგ შემთხვევაში, განაცხადი არ განიხილება.
                                </p>
                                <p>
                                    შენიშვნა: წინამდებარე ვაკანსიისათვის პირის მიერ CV-ს წარდგენა, გულისხმობს პირის მიერ
                                    პერსონალური მონაცემების დამსაქმებელისათვის გადაცემას და თანხმობის გაცხადებას აღნიშნული
                                    მონაცემების დამუშავების თაობაზე. CV-ში მოცემული პერსონალური მონაცემები დამსაქმებელის
                                    მიერ დამუშავებულ/შენახულ იქნება მხოლოდ გამოცხადებული ვაკანსიისათვის კანდიდატის
                                    შერჩევის მიზნით, შესასრულებელ სამუშაოსთან კანდიდატის შესაბამისობის დადგენის მიზნით,
                                    შესაძლო შრომითი ურთიერთობის წარმოშობის მიზნით, შრომითი ურთიერთობის მთელი პერიოდის
                                    განმავლობაში, ასევე შრომითი ურთიერთობიდან გამომდინარე. დამსაქმებლის მხრიდან, ზემოთ
                                    აღნიშნული მიზნებისათვის, პერსონალური მონაცემების დამუშავება განხორციელდება მხოლოდ
                                    შესაბამისი უფლებამოსილების მქონე პირთა/თანამშრომელთა მიერ. კანდიდატის პერსონალური
                                    მონაცემების დამუშავება განხორციელდება 2 Tvის ვადით, ელექტრონული ან/და ამობეჭდილი
                                    სახით.
                                </p>
                                <div className='text-center'>
                                    <button type='submit'>
                                        ინტერესის გამოხატვა
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default VacancySingle