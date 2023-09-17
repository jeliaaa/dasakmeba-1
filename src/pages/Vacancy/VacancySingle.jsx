import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './vacancy.scss'
const VacancySingle = () => {
    const { id } = useParams();
    const [interest, setInterest] = useState(false);
    return (
        <Container className='vac_con' style={{ backgroundColor: '#fff' }}>
            <Breadcrumbs />
            <div className='vacancy_single_wrapper'>
                <div className='vacancy_single_left'>
                    <div className="infos">
                        <div className='company_info'>
                            <img src='https://picsum.photos/200' alt='...' />
                            <h3>კომპანიის სახელი</h3>
                        </div>
                        {interest && <div className="accountant_info">
                            <div><i className='fa-solid fa-phone' /><p>555-54-78-36</p></div>
                            <div><i className='fa-solid fa-envelope' /><p>lorem.picsum@gmail.com</p></div>
                            <div><i className='fa-solid fa-address-book' /><p>საელი გვარი</p></div>
                        </div>}
                    </div>
                    <button onClick={() => {alert('successfully submitted'); setInterest(true)}} className='interested_btn'>დაინტერესება</button>
                </div>
                <div className='vacancy_single_right'>
                    <div className='vacancy'>
                        <h2>პოზიცია</h2>
                        <section>
                            <p className='sal'><i className='fa-solid fa-coins'></i>ხელფასი</p>
                            <p><i className='fa-solid fa-location'></i>ლოკაცია</p>
                        </section>
                        <div className="two">
                            <span>ID:{id}</span>
                            <p></p>
                            <p>განაკვეთი</p>
                        </div>
                    </div>
                    <h4 className='address'>ქ.ბათუმი ჯავახიშვილის 94  /  ინდუსტრია</h4>
                    <div className='description'>
                        <Container className='vac_con'>
                            სატესტო ტექსტი სატესტო სატესტო ტექსტი სატესტო სატესტო ტექსტი სატესტო სატესტო ტექსტი სატესტო სატესტო ტექსტი სატესტო
                            <li>მოთხოვნილება 1</li>
                            <li>მოთხოვნილება 2</li>
                            <li>მოთხოვნილება 3</li>
                            რაღაც ტექსტი სიტყვების მიმდევრობა, სიტყვების მიმდევრობა. აუცილებელია რაღაც სიტყვები! ტექსტი სიტყვების მიმდევრობა, სიტყვების ტექსტი სიტყვების მიმდევრობა, სიტყვებისტექსტი სიტყვების მიმდევრობა, სიტყვების  
                            <li>მოთხოვნილება 1</li>
                            <li>მოთხოვნილება 2</li>
                            <li>მოთხოვნილება 3</li>
                            <li>მოთხოვნილება 2</li>
                            <li>მოთხოვნილება 3</li>                
                            რაღაც ტექსტი სიტყვების მიმდევრობა, სიტყვების მიმდევრობა. აუცილებელია რაღაც სიტყვები! ტექსტი სიტყვების მიმდევრობა, სიტყვების ტექსტი სიტყვების მიმდევრობა, სიტყვებისტექსტი სიტყვების მიმდევრობა, სიტყვების  
                           
                            რაღაც ტექსტი სიტყვების მიმდევრობა, სიტყვების მიმდევრობა. აუცილებელია რაღაც სიტყვები! ტექსტი სიტყვების მიმდევრობა, სიტყვების ტექსტი სიტყვების მიმდევრობა, სიტყვებისტექსტი სიტყვების მიმდევრობა, სიტყვების  

                        </Container>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default VacancySingle