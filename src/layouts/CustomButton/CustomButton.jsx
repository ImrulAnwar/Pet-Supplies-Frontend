import './CustomButton.css';
import React from 'react';

const CustomButton = ({ text, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;
