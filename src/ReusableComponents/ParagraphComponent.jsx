import React from 'react';

const ParagraphComponent = ({ text, num }) => {
  const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      const truncatedText = words.slice(0, maxLength).join(' ');
      return `${truncatedText} . . .`;
    }
    return text;
  };

  return (
    <div>
      <p>{truncateText(text, 10)}</p>
    </div>
  );
};
export default ParagraphComponent;
