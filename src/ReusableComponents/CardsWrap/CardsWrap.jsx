import React, { useState } from 'react'
import PaginationItemss from './Paginated/PaginationItems';
import Pagination from './Paginated/Pagination';
import './paginatedCards.scss'
const CardsWrap = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const childCount = React.Children.count(children);
    const childrenss = React.Children.toArray(children);
    const lastPostIndex = (currentPage * postsPerPage);
    const firstPostIndex = (lastPostIndex - postsPerPage);
    const currentPosts = childrenss.slice(firstPostIndex, lastPostIndex);
    return (
        <div className='paginated_cards'>
            <PaginationItemss itemsData={currentPosts} childCount={childCount} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={childCount}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default CardsWrap