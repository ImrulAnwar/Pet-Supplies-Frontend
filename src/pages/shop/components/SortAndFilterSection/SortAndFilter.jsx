import React from 'react'
import './SortAndFilter.css'

const SortAndFilter = () => {
  const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <div className='left-shop'>
      <div className="left-box">
        <div className="sort-by-box">
            <h1>Sort</h1>
            <select id="dropdown">
                {options.map((option, index) => (
                  <option key={index} value={`option${index + 1}`}>
                    {option}
                  </option>
                ))}
            </select>   
        </div>
      </div>
    </div>    
  );
}

export default SortAndFilter;
