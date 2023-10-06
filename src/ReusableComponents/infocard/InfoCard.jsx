import React from 'react'
import './infocard.scss'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ParagraphComponent from '../ParagraphComponent'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const InfoCard = ({ date, heading, thumbText, id, active }) => {
    // const { vw, vh } = useWindowDimensions();
    return (
        <Link className='info_card_wrapper' to={`${id}`}>
            <Card className='info_card'>
                <div className='image_wrapper'>
                    <img src="https://placehold.co/200x100" alt="..." />
                </div>
                <div className="info_card_heading">
                    {active === false && <p style={{ color: 'red' }}>არ არის აქტიური</p>}
                    <p>{date}</p>
                    <h3>{heading}</h3>
                    <hr />
                    <ParagraphComponent text={thumbText} num={4} />
                </div>
            </Card>
        </Link>
    )
}

export default InfoCard