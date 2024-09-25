import React, { useRef } from 'react'
import './Tours.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Tours = () => {

    const slider = useRef();
    let transX=0;

    const slideForward=()=>{
        if(transX > -50)
        {
            transX -=25; 
        }
        slider.current.style.transform=`translateX(${transX}%)`
    }

    const slideBackward=()=>{
        if(transX < 0)
            {
                transX +=25; 
            }
            slider.current.style.transform=`translateX(${transX}%)`
    }
    

  return (
    <div className='tours'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" className='user-1'/>
                            <div>
                                <h3>Switzerland</h3>
                            </div>
                        </div>
                        <p>"Switzerland, a paradise for nature lovers, offers breathtaking alpine scenery, picturesque lakes, and charming cities. From skiing in the Swiss Alps to exploring Zurich's culture and Geneva's elegance, Switzerland is a dream destination for every traveler."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt="" className='user-2'/>
                            <div>
                                <h3>Portugal</h3>
                            </div>
                        </div>
                        <p>"Portugal is a blend of rich history, stunning coastlines, and vibrant cities. From Lisbon's charm to Porto's wine culture and the Algarve's golden beaches, Portugal offers a perfect mix of culture, nature, and relaxation."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt="" className='user-3'/>
                            <div>
                                <h3>Italy</h3>
                            </div>
                        </div>
                        <p>"Italy, a land of timeless beauty, is renowned for its historic cities, delicious cuisine, and stunning landscapes. From Rome's ancient ruins to Venice's canals and Tuscany's rolling hills, Italy offers an unforgettable travel experience."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt="" className='user-4'/>
                            <div>
                                <h3>France</h3>
                            </div>
                        </div>
                        <p>"France captivates with its iconic landmarks, rich culture, and diverse landscapes. From the romantic streets of Paris to the scenic vineyards of Bordeaux and the stunning French Riviera, France is a must-visit destination for every traveler."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Tours
