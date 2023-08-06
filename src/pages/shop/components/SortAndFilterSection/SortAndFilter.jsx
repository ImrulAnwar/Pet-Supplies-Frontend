import React from 'react'
import './SortAndFilter.css'
import Dropdown from '../../../../layouts/Dropdown/Dropdown'
import Line from '../../../../layouts/Line/Line'
import FilterSection from '../FilterSection/FilterSection'
const SortAndFilter = ({sortBy, category, sortOptions, categoryOptions}) => {
  return (
    <div className='left-shop'>
      <div className="left-box">
          <Dropdown text="Sort By" options={sortOptions} onSelect={sortBy} /> 
          <Line/>
          <Dropdown text="Category" options={categoryOptions} onSelect={category} /> 
          <Line/>
          <FilterSection/>
      </div>
    </div>    
  );
}

export default SortAndFilter;
