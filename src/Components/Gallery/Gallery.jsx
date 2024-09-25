import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="photos"> 
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <a href="https://youtu.be/0SrSOpY1YnU?si=jWi_s8IelhQdsuk_" target="_blank">
        <button className='btn dark-btn'>See More Here<img src={white_arrow} alt="" /></button>
        </a>
    </div>
  )
}

export default Gallery
