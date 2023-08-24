import React from 'react'
import './partnerscard.scss'

const PartnersCard = ({ thumb, img, name }) => {
    return (
        <div className='card partners_card'>
            <img className='thumb_img' src={thumb} alt="..." />
            <div className='info'>
                <div className='info_img_wrapper' >
                    <img src={img} alt="..." />
                </div>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default PartnersCard