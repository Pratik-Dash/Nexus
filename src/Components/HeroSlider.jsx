import React, { useState } from 'react'

const HeroSlider = () => {
    const [currentIndex,setImageIndex] = useState(0)
    const images = [
      {
        pic:"https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-desktop-1280x702-e064efcb1338.jpg?h=720&quality=medium&resize=1&w=1280"
      },
      {
        pic:"https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        altText:"Sony Console"
      },
      {
      pic:"https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      altText : "iphone"
      }

    ]
    const moveToNextImage = () => {
      setImageIndex((currentIndex) => (currentIndex === images.length-1? 0:++currentIndex))
    }
    const moveToPreviousImage = () => {
      setImageIndex((currentIndex) =>(currentIndex === 0?images.length-1:--currentIndex))
    }
  return(
    
    <div className='slider'>
    <button className = "left-arrow" onClick = {moveToNextImage}>⇦</button>
    <button className="right-arrow" onClick = {moveToPreviousImage}>⇨</button>
        <div className = "slides" style={{backgroundImage : `url(${images[currentIndex].pic})`}}></div>
    </div>
  )
}

export default HeroSlider
