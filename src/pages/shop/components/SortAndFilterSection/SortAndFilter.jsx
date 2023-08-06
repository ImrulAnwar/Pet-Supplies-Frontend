import React from 'react'
import './SortAndFilter.css'
import Dropdown from '../../../../layouts/Dropdown/Dropdown'
import Line from '../../../../layouts/Line/Line'
import FilterSection from '../FilterSection/FilterSection'
const SortAndFilter = () => {
  const options = ['Option 1', 'Option 2', 'Option 3']
  const handleDropdownSelect = (selectedValue) => {
    // Your logic here to handle the selected value
    console.log('Selected Value:', selectedValue);
  };

  return (
    <div className='left-shop'>
      <div className="left-box">
          <Dropdown text="Sort By" options={options} onSelect={handleDropdownSelect} /> 
          <Line/>
          <Dropdown text="Category" options={options} onSelect={handleDropdownSelect} /> 
          <Line/>
          <FilterSection/>
      </div>
    </div>    
  );
}

export default SortAndFilter;
