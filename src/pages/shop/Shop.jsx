import React, {useState, useEffect} from 'react'
import Line from '../../layouts/Line/Line'
import './Shop.css'
import SortAndFilter from './components/SortAndFilterSection/SortAndFilter'
import ScrollableItemsList from './components/ScrollableItems/ScrollableItemsList'
import { fetchAllItems } from '../../services/item_api'
import TopShop from './components/TopSection/TopShop'

function Shop() {
  const [selectedSection, setSelectedSection] = useState('All')
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const sortOptions = ['Latest', 'Oldest', 'Price( High-Low )', 'Price( Low-High )','Name (A-Z)']
  const categoryOptions = ['Accessories','Health & Care','Food', 'Litter', 'Beds & Carrier']

  const handleSectionSelect = (section) => {
    setSelectedSection(section)
  };

  const sortBy = (selectedValue) => {
    
  };

  const category = (selectedValue) => {
    
  };

  useEffect(() => {
    fetchAllItems()
      .then((data) => {
        setItems(data)
        setFilteredItems(data)
        console.log('Response data:', data)
      })
  }, [])

  useEffect(() => {
    // Filter items based on the selected category whenever it changes
    if (selectedSection === 'All') {
      setFilteredItems(items) // Show all items when 'all' category is selected
    } else if (selectedSection === 'Favorite') {
      const filtered = items.filter((item) => item.is_favorite);
      setFilteredItems(filtered)
    } else {
      const filtered = items.filter((item) => item.pet_type === selectedSection);
      setFilteredItems(filtered)
    }
  }, [selectedSection, items])


  useEffect(() => {
    document.querySelectorAll('.category').forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`
    })
  }, [])


  return (
    <div className="shop-container">
      <Line />
      <TopShop selectedSection={selectedSection} handleSectionSelect={handleSectionSelect} />
      <Line />
      <div className="bottom-shop">
        <SortAndFilter sortBy={sortBy} category={category} sortOptions={sortOptions} categoryOptions={categoryOptions} />
        <div className="scrollable-items">
          <ScrollableItemsList items={filteredItems} />
        </div>
      </div>
    </div>
  );
}

export default Shop;

