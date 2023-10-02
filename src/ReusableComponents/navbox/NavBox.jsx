import React from 'react'
import { Link } from 'react-router-dom'
import './navbox.scss'
const NavBox = ({ name, to, img }) => {
    return (
        <div className="nav-box" style={{backgroundImage:`url(${img})`}}>
            <Link to={to}><h3>{name}</h3></Link>
        </div >
    )
}

export default React.memo(NavBox)