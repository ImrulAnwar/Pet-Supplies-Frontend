import React, {useState, useEffect} from 'react'
import Line from '../../layouts/Line/Line'
import './Shop.css'
import SortAndFilter from './components/SortAndFilterSection/SortAndFilter'
import ScrollableItemsList from './components/ScrollableItems/ScrollableItemsList'
import { fetchAllItems } from '../../services/item_api'

function Shop() {
  const [selectedSection, setSelectedSection] = useState('All')
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  const handleSectionSelect = (section) => {
    setSelectedSection(section);    
  };

  useEffect(() => {
    fetchAllItems()
      .then((data) => {
        setItems(data);
        console.log('Response data:', data);
      });
  }, []);

  useEffect(() => {
    // Filter items based on the selected category whenever it changes
    if (selectedSection === 'All') {
      setFilteredItems(items); // Show all items when 'all' category is selected
    } else if (selectedSection === 'Favorite') {
      const filtered = items.filter((item) => item.is_favorite === selectedSection);
      setFilteredItems(filtered);
    } else {
      const filtered = items.filter((item) => item.pet_type === selectedSection);
      setFilteredItems(filtered);
    }
  }, [selectedSection, items]);


  useEffect(() => {
    document.querySelectorAll('.category').forEach((element, index) => {
      element.style.animationDelay = `${index * 0.3}s`
    })
  }, [])


  return (
    <>
      <Line />
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
      <Line />
      <div className="bottom-shop">
        <SortAndFilter/>
        <ScrollableItemsList items = {filteredItems}/>
      </div>
    </>
  );
}

export default Shop;

