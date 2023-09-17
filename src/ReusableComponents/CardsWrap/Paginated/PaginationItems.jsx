import React from 'react'
import './cardAlignment.scss'
const PaginationItemss = ({ itemsData }) => {
    const childCount = itemsData.length;
    return (
        <div className='cards_wrap' style={{display : 'flex', justifyContent: childCount === 2 || childCount === 5 ? 'flex-start' : 'space-between', gap: childCount === 2 || childCount === 5 && '4%', rowGap: childCount === 2 || childCount === 5 && 20}}>
            {itemsData.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
            ))}
        </div>
    )
}

export default PaginationItemss