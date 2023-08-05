import './CustomButton.css'
import React from 'react'

const CustomButton = ({text}) => {
  return (
    <button className="button">{text}</button>
  );
};

export default CustomButton;