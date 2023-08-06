import React from 'react'
import './ScrollableItemsList.css'
import ProductItem from '../../../../layouts/ProductItem/ProductItem'

function ScrollableItemsList() {
  return (
    <div className='right-shop'>
      <h1>This is Scrollable Items List</h1>
      <ProductItem/>
    </div>    
  )
}

export default ScrollableItemsList