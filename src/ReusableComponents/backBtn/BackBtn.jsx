import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BackBtn = () => {
    const pathObj = useLocation();
    const path = pathObj.pathname;
    let pathArr = path.split('/');
    console.log(pathArr);
    pathArr.splice(pathArr.length - 1)
    console.log(pathArr);
    if(pathArr.length > 1){
        pathArr.splice(0,1)
    } else{
        pathArr = ['main']
    }
    return (
        <Link to={`/${pathArr}`} >
            <button>BACK</button>
        </Link>
    )
}

export default BackBtn