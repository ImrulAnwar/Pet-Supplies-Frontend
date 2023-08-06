import React from 'react'
import './ScrollableItemsList.css'
import ProductItem from '../../../../layouts/ProductItem/ProductItem'

function ScrollableItemsList({ items }) {
  if (!items || items.length === 0) {
    return <div className='right-shop'>
      <h1>No items to display!</h1>
    </div>;
  }
  return (
    <div className='right-shop'>
      {items.map((item) => (
        <ProductItem key={item.slug} item={item} />
      ))}
    </div>
  );
}

export default ScrollableItemsList