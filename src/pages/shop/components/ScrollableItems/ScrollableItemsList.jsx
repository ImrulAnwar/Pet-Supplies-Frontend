import React from 'react'
import './ScrollableItemsList.css'
import ProductItem from '../../../../layouts/ProductItem/ProductItem'

function ScrollableItemsList() {
  return (
    <div className='right-shop'>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div>    
  )
}

export default ScrollableItemsList