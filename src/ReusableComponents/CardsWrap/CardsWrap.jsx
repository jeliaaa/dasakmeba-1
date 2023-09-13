import React from 'react'
import './cardAlignment.scss'
const CardsWrap = ({ children }) => {
    const childCount = React.Children.count(children);
    return (
        <div className='cards_wrap' style={{display : 'flex', justifyContent: childCount === 2 ? 'flex-start' : 'space-between', gap: childCount === 2 && '4%'}} >{children}</div>
    )
}

export default CardsWrap