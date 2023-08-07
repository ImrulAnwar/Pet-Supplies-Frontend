import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import Line from '../../layouts/Line/Line'
import CategorySection from './components/CategorySection/CategorySection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer'  
import OurProduct from './components/OurProducts/OurProduct'

function Home() {
  return (
    <div>
      <Line/>
      <WelcomeSection/>
      <Line/>
      <CategorySection/>
      <Line/>
      <WhatWeOffer/>
      <Line/>
      <OurProduct/>
    </div>
  )
}

export default Home
