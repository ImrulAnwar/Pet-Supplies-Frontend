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
  const sortOptions = ['Latest', 'Price', 'Name (A-Z)']
  const categoryOptions = ['Option 1', 'Option 2', 'Option 3']

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
      element.style.animationDelay = `${index * 0.3}s`
    })
  }, [])


  return (
    <>
      <Line />
      <TopShop selectedSection={selectedSection} handleSectionSelect={handleSectionSelect} />
      <Line />
      <div className="bottom-shop">
        <SortAndFilter sortBy={sortBy} category={category} sortOptions={sortOptions} categoryOptions={categoryOptions}/>
        <ScrollableItemsList items = {filteredItems}/>
      </div>
    </>
  );
}

export default Shop;

