import React from 'react'
import './partnerscard.scss'
import { Link } from 'react-router-dom'
const PartnersCard = ({ thumb, img, name, link }) => {
    return (
        <Link className='partner_card_link' to={link}>
            <div className='card partners_card'>
                {thumb && <img className='thumb_img' src={thumb} alt="..." />}
                <div className='info'>
                    <div className='info_img_wrapper' >
                        <img src={img} alt="..." />
                    </div>
                    <h3>{name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default PartnersCard