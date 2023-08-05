import React, {useState, useEffect} from 'react'
import Line from '../../layouts/Line/Line'
import './Shop.css'
import SortAndFilter from './components/SortAndFilterSection/SortAndFilter'
import ScrollableItemsList from './components/ScrollableItems/ScrollableItemsList'

function Shop() {
  const [selectedSection, setSelectedSection] = useState('dogs');

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    document.querySelectorAll('.category').forEach((element, index) => {
      element.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);


  return (
    <>
      <Line />
      {/* Top Section */}
      <div className="top-shop">
        <h2
          className={`category ${selectedSection === 'dogs' ? 'selected-category' : ''}`}
          onClick={() => handleSectionSelect('dogs')}
        >
          Dogs
        </h2>
        <h2
          className={`category ${selectedSection === 'cats' ? 'selected-category' : ''}`}
          onClick={() => handleSectionSelect('cats')}
        >
          Cats
        </h2>
        <h2
          className={`category ${selectedSection === 'birds' ? 'selected-category' : ''}`}
          onClick={() => handleSectionSelect('birds')}
        >
          Birds
        </h2>
      </div>
      <Line />
      <div className="bottom-shop">
        <SortAndFilter/>
        <ScrollableItemsList/>
      </div>
    </>
  );
}

export default Shop;

