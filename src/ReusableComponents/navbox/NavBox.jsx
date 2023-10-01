import React from 'react'
import { Link } from 'react-router-dom'
import './navbox.scss'

const NavBox = ({ name, to }) => {
    return (
        <div className="nav-box">
            <Link to={to}><p>{name}</p></Link>
        </div >
    )
}

export default React.memo(NavBox)