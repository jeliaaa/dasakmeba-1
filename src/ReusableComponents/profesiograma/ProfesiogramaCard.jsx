import React from 'react'
import './profesiogramacard.scss'
import { Link } from 'react-router-dom'
const ProfesiogramaCard = ({ click, a, img, name, id }) => {

    return (
        <div className='card profesiograma' onClick={click}>
            {a ? <Link to={`${id}`}></Link> : '' }
            <img src={img} alt="..." />
            <div className='profesiograma_info'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default ProfesiogramaCard