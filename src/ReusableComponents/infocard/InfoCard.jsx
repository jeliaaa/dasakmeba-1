import React from 'react'
import './infocard.scss'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const InfoCard = ({ date, heading, thumbText,id }) => {
    return (
        <Link className='info_card_wrapper' to={`${id}`}>
            <Card className='info_card'>
                <div className='image_wrapper'>
                    <img src="https://placehold.co/200x100" alt="..." />
                </div>
                <div className="info_card_heading">
                    <p>{date}</p>
                    <h3>{heading}</h3>
                    <hr />
                    <p>{thumbText}</p>
                </div>
            </Card>
        </Link>

    )
}

export default InfoCard