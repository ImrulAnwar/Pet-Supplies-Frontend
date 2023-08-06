import React from 'react'
import './ScrollableItemsList.css'
import ProductItem from '../../../../layouts/ProductItem/ProductItem'

function ScrollableItemsList({ items }) {
  return (
    <div className='right-shop'>
      {items.map((item) => (
        <ProductItem key={item.slug} item={item} />
      ))}
    </div>
  );
}

export default ScrollableItemsList