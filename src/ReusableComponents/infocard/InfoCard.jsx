import React from 'react'
import './infocard.scss'
import { Card } from 'react-bootstrap'

const InfoCard = ({ date, heading, thumbText }) => {
    return (
        <Card className='info_card'>
            <div className='image_wrapper'>
                <img src="https://placehold.co/200" alt="..." />
            </div>
            <div className="info_card_heading">
                <p>{date}</p>
                <h3>{heading}</h3>
                <hr />
                <p>{thumbText}</p>
            </div>
        </Card>
    )
}

export default InfoCard