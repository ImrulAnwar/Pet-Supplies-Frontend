import React from 'react'
import './TopShop.css'

function TopShop({ selectedSection, handleSectionSelect }) {
  return (
    <div className="top-shop">
      <h2
        className={`category ${selectedSection === 'All' ? 'selected-category' : ''}`}
        onClick={() => handleSectionSelect('All')}
      >
        All
      </h2>
      <h2
        className={`category ${selectedSection === 'Dog' ? 'selected-category' : ''}`}
        onClick={() => handleSectionSelect('Dog')}
      >
        Dogs
      </h2>
      <h2
        className={`category ${selectedSection === 'Cat' ? 'selected-category' : ''}`}
        onClick={() => handleSectionSelect('Cat')}
      >
        Cats
      </h2>
      <h2
        className={`category ${selectedSection === 'Bird' ? 'selected-category' : ''}`}
        onClick={() => handleSectionSelect('Bird')}
      >
        Birds
      </h2>
      <h2
        className={`category ${selectedSection === 'Favorite' ? 'selected-category' : ''}`}
        onClick={() => handleSectionSelect('Favorite')}
      >
        Favourite
      </h2>
    </div>
  )
}

export default TopShop;
