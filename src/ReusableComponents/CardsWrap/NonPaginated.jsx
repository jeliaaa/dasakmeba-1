import React from 'react'
import '../CardsWrap/Paginated/cardAlignment.scss'
const NonPaginated = ({ children }) => {
    return (
        <div className='cards_wrap' >
            {children}
        </div>
    )
}

export default NonPaginated