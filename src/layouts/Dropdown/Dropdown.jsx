import React from 'react';
import './Dropdown.css'

const Dropdown = ({ text, options, onSelect }) => {
  const handleChange = (event) => {
    // Get the selected value from the dropdown
    const selectedValue = event.target.value;
    // Call the onSelect function with the selected value
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  return (
    <div className="dropdown-box">
      <h2>{text}</h2>
      <select id="dropdown" onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={`option${index + 1}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;