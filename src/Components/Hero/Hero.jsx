import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Travel, Find Peace, Life is short & the world is wide...</h1>
                <p>"Traveling opens up a world of endless possibilities. It's not just about exploring new places but also about discovering diverse cultures, experiencing different ways of life, and creating memories that last a lifetime. Whether it's the thrill of adventure, the serenity of nature, or the vibrant energy of cities, travel enriches the soul and broadens perspectives. Every destination has a story to tell, and every journey transforms you in ways beyond imagination."</p>
                <a href="https://www.youtube.com/@explorewithvinu1999" target="_blank">
  <button className="btn">
    Explore YouTube Channel <img src={dark_arrow} alt="" />
  </button>
</a>
            </div>
        </div>
    )
}

export default Hero
