import React from 'react'
import random_product_img from '../../assets/images/random_product.png'
import heart_checked from '../../assets/icons/heart_checked.png'
import heart_unchecked from '../../assets/icons/heart_unchecked.png'
import './ProductItem.css'
import CartButton from '../CartButton/CartButton'

function ProductItem({ image = random_product_img, title = "Product Title", is_favorite = false, price = 0, onClick }) {
  const handleClick = () => {
    // Check if onClick prop is provided and then call it
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className="product-item" onClick={handleClick}>
        <img className= 'product-image' src={image} alt="product-image" />
        <h2>{title}</h2>
        <img src={is_favorite ? heart_checked : heart_unchecked} alt="is_favorite" />
        <h3>৳{price}</h3>
        <div className="button-wraper">
            <CartButton text = 'Add to Cart'/>
        </div>
    </div>
  )
}

export default ProductItem
