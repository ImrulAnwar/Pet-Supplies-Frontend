import React from 'react'
import './WelcomeSection.css'
import WelcomeImage from '../../../../assets/images/welcome_picture.png'
import CustomButton from '../../../../layouts/CustomButton/CustomButton'


const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="left-welcome">
        <div className="welcome">Welcome to <br /> PetInnn</div>
        <div className="topic_sentence">Explore the finest pet supplies & accessories for your beloved companions!</div>
        <CustomButton text = "Shop Now"/>
      </div>
      <div className="right-welcome">
        <div className="welcome_picture">
            <img src={WelcomeImage} alt="welcome" />
        </div>
      </div>
    </div>
  )
}


export default WelcomeSection;