import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './back.scss';
import { useTranslation } from 'react-i18next';

const BackBtn = () => {
  const pathObj = useLocation();
  const path = pathObj.pathname;
  let pathArr = path.split('/');
  pathArr.splice(pathArr.length - 1);
  const {t} = useTranslation();; 
  if (pathArr.length > 1) {
    pathArr.splice(0, 1);
  } else {
    pathArr = ['main'];
  }

  const newPath = `/${pathArr.join('/')}`; 

  return (
    <Link to={newPath}>
      <button className='back'>{t('back')}</button>
    </Link>
  );
};

export default BackBtn;
