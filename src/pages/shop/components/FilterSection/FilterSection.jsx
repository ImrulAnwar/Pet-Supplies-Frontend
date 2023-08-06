import React from 'react'
import './FilterSection.css'
import filterIcon from '../../../../assets/icons/filter.png'
import Line from '../../../../layouts/Line/Line';

function FilterSection() {
  return (
    <div className='filter-section'>
        <div className="filter-heading">
            <img src={filterIcon} alt="filter" />
            <h2>Filter</h2>
        </div>
        
        <div className='filter-box'>
            <div className="price-range">
              <h2>Price Range</h2>
              <div className="high-low">
                <input type="text" placeholder="Low" />
                <input type="text" placeholder="High" />
              </div>
            </div>
            <Line/>
            <div className="availability">
              <h2>Availability</h2>
              <div className="check-boxes">
                <label>
                  <input type="checkbox" name="in-stock" />
                  In Stock
                </label>
                <label>
                  <input type="checkbox" name="pre-order" />
                  Pre Order
                </label>
                <label>
                  <input type="checkbox" name="upcoming" />
                  Upcoming
                </label>
              </div>
            </div>
            <Line/>
        </div>  
    </div>  
  );
}

export default FilterSection;