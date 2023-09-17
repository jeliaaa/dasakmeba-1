import React from 'react'
import './cardAlignment.scss'
const CardsWrap = ({ children }) => {
    const childCount = React.Children.count(children);
    return (
        <div className='cards_wrap' style={{display : 'flex', justifyContent: childCount === 2 || childCount === 5 ? 'flex-start' : 'space-between', gap: childCount === 2 || childCount === 5 && '4%', rowGap: childCount === 2 || childCount === 5 && 20}} >{children}</div>
    )
}

export default CardsWrap