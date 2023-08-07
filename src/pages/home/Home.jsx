import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import Line from '../../layouts/Line/Line'
import CategorySection from './components/CategorySection/CategorySection'


function Home() {
  return (
    <div>
      <Line/>
      <WelcomeSection/>
      <Line/>
      <CategorySection/>
    </div>
  )
}

export default Home
