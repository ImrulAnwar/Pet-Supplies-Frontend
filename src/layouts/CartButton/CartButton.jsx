import './CartButton.css';
import React from 'react';

const CartButton = ({ text, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="cart-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default CartButton;
