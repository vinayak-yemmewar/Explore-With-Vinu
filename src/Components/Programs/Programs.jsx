import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        
        <div className='program'>
            <img src={program_1} alt="" />
            <div className="caption">
                <h2>Cheapest Countries to Travel</h2>
                <p>"Discover budget-friendly travel destinations where adventure meets affordability. Explore stunning landscapes, rich cultures, and hidden gems without breaking the bank!"</p>
                <a href="https://youtube.com/playlist?list=PLNM6QLc6dqzZGSEAKdn1gvLVbEideUBF-&si=w-r_vVKtJdAqtUoK" target="_blank">
                <br></br><p>Click Here to See Playlist !</p>
                </a>
            </div>
        </div>

        <div className='program'>
            <img src={program_2} alt="" />
            <div className="caption">
                <h2>Visa-Free Countries for Indian</h2>
                <p>"Explore hassle-free travel to visa-free destinations for Indian travelers! Discover stunning countries that welcome you without the need for a visa, offering unforgettable experiences and easy adventures."</p>
                <a href="https://youtube.com/playlist?list=PLNM6QLc6dqzbSwtSePQb9PfGUuAxkCkin&si=8r_VF1yMHqIRzcsv" target="_blank">
                <br></br><p>Click Here to See Playlist !</p>
                </a>
            </div>
        </div>

        <div className='program'>
            <img src={program_3} alt="" />
            <div className="caption">
                <h2>Beautiful Countries & Cities</h2>
                <p>"Embark on a journey to the world's most breathtaking countries and cities. Discover stunning landscapes, iconic landmarks, and vibrant cultures that will leave you mesmerized. Explore the beauty of these must-visit destinations!"</p>
                <a href="https://youtube.com/playlist?list=PLNM6QLc6dqzYiW0pd9zQqEkZgI7T_hG8X&si=cLjSNtsWV_8JCrOM" target="_blank">
                <br></br><p>Click Here to See Playlist !</p>
               </a>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
