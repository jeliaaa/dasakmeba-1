import React from 'react'
import './footer.scss'
import logo from '../../assets/footer_logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    const socials = [
        { id: 1, name: 'facebook', link: 'https://facebook.com' },
        { id: 2, name: 'instagram', link: 'https://instagram.com' },
        { id: 3, name: 'linkedin', link: 'https://linkedin.com' }
    ]
    return (
        <footer>
            <div className='upper_footer'>
                <div className='col-md-4 brand'>
                    <img src={logo} alt='HR' />
                </div>
                <div className='links col-md-4'>
                    <h3>Useful links</h3>
                    <ul>
                        <li><Link to={'https://jobs.hrajara.gov.ge/'}>ვაკანსია</Link></li>
                        <li><Link to={'https://jobs.hrajara.gov.ge/'}>სიახლეები</Link></li>
                    </ul>
                </div>
                <div className='contact col-md-4'>
                    <Link to={'/contact'}>
                        <div>
                            <h3>Contact us</h3>
                            <p>ბათუმი, ივ. ჯავახიშვილის ქ. #70/72</p>
                            <p>info.hrajara@gmail.com</p>
                            <p>+995 422 24 78 82</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bottom_footer">
                <div className='col-md-4 copy'>
                    <h6>&copy;2023 hradjara.gov.ge</h6>
                </div>
                <div className="col-md-4 socials">
                    {/* <div>
                        {socials.map((social) => (
                            <Link key={social.id} to={social.link}>
                                <i className={`fa-brands fa-${social.name} fa-2xl `}></i>
                            </Link>
                        ))}
                    </div> */}
                </div>
                <div className='col-md-4 rights'>
                    <p>All rights reserved &copy;</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer