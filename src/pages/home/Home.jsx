import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import Line from '../../layouts/Line/Line'
import CategorySection from './components/CategorySection/CategorySection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer'  
import OurProduct from './components/OurProducts/OurProduct'
import { fetchAllItems } from '../../services/item_api'
import React, {useState, useEffect} from 'react'

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchAllItems()
      .then((data) => {
        setItems(data)
        setFilteredItems(data)
        console.log('Response data:', data)
      })
  }, [])

  const shuffledItems = shuffleArray(items);
  const featuredItems = shuffledItems.slice(0, 5);

  return (
    <div>
      <Line/>
      <WelcomeSection/>
      <Line/>
      <CategorySection/>
      <Line/>
      <FeaturedSection items = {featuredItems}/>
      <Line/>
      <WhatWeOffer/>
      <Line/>
      <OurProduct/>
    </div>
  )
}

export default Home
