import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './back.scss';

const BackBtn = () => {
  const pathObj = useLocation();
  const path = pathObj.pathname;
  let pathArr = path.split('/');
  pathArr.splice(pathArr.length - 1);

  if (pathArr.length > 1) {
    pathArr.splice(0, 1);
  } else {
    pathArr = ['main'];
  }

  const newPath = `/${pathArr.join('/')}`; 

  return (
    <Link to={newPath}>
      <button className='back'>BACK</button>
    </Link>
  );
};

export default BackBtn;
