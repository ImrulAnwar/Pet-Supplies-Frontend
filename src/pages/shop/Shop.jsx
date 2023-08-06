import React, {useState, useEffect} from 'react'
import Line from '../../layouts/Line/Line'
import './Shop.css'
import SortAndFilter from './components/SortAndFilterSection/SortAndFilter'
import ScrollableItemsList from './components/ScrollableItems/ScrollableItemsList'
import axios from 'axios'

function Shop() {
  const [selectedSection, setSelectedSection] = useState('all')
  const [items, setItems] = useState([])

  const handleSectionSelect = (section) => {
    setSelectedSection(section);

    if (section === 'all') {
      axios.get('http://localhost:8000/items/all')
        .then((response) => {
          setItems(response.data)
          console.log('Response data:', response.data)
        })
        .catch((error) => console.error('Error fetching data:', error))
    }
  };

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
          className={`category ${selectedSection === 'all' ? 'selected-category' : ''}`}
          onClick={() => handleSectionSelect('all')}
        >
          All
        </h2>
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
        <h2
          className={`category ${selectedSection === 'favorite' ? 'selected-category' : ''}`}
          onClick={() => handleSectionSelect('favorite')}
        >
          Favourite
        </h2>
      </div>
      <Line />
      <div className="bottom-shop">
        <SortAndFilter/>
        <ScrollableItemsList items = {items}/>
      </div>
    </>
  );
}

export default Shop;

