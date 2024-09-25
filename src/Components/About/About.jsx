import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{
                    setPlayState(true)
                }}/>
            </div>
            <div className="about-right">
                <h1>About Explore With Vinu</h1>
                <p>Welcome to Explore With Vinu! Join us on our adventures as we explore the world's most stunning destinations. From bustling cities to serene landscapes, we share travel tips, hidden gems, and must-visit spots. Whether you're a seasoned traveler or planning your next getaway, our channel is your go-to guide for inspiration and practical advice. Let's discover the world together!</p>
            </div>
        </div>
    )
}

export default About
