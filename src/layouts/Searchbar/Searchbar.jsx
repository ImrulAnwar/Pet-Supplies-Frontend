import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../../assets/icons/search.png';



const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <input
        type="text"
        placeholder="Search"
        className={`search-input ${isExpanded ? 'expanded' : ''}`}
      />
      <button className="search-button" onClick={handleButtonClick}>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
