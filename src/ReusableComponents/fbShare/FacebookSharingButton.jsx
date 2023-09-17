import React from 'react';
import './share.scss';
const FacebookShareButton = ({ url }) => {
  const handleShare = () => {
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbShareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <button className='share' onClick={handleShare}>გაზიარება<i className='fa-solid fa-share'/></button>
  );
};

export default FacebookShareButton;
