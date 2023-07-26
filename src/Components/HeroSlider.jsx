import React, { useState, useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import MoonLoader from "react-spinners/MoonLoader";
import Carousel from "react-multi-carousel";
const HeroSlider = () => {
  const {products} = useContext(DataContext)
  if(!products){
    return <div>Loading...</div>
  }
  const heroItem = products.find(item => item.title.toLowerCase() === "fifa 23")
  if(!heroItem){
    return(
      <div className='hero-loader-container'>
    <MoonLoader color="#000000" size={50}/>
  </div>
    )
  }
 
  return(
   <Carousel 
    responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  showDots
  
  swipeable
  autoPlay
  autoPlaySpeed={3000}
  infinite
>
    <div className='hero-image-container'>
    
    <div className = "hero-image" style={{backgroundImage : `url("https://cdn2.unrealengine.com/egs-fifa-23-womens-world-cup-carousel-desktop-1920x1080-400538513d51.jpg?h=720&quality=medium&resize=1&w=1280")`}}>
      <div className='hero-item'>
          

          <div className='hero-item-details-container'>
              <span className='now-available-text'>NOW AVAILABLE</span>
              <span className='hero-action-text'>Play the FIFA Women’s World Cup™ in FIFA 23 at no additional cost.</span>
              <span className='hero-item-price'>Staring at ₹{heroItem.price}</span>
              <div className='hero-action-buttons'>
                <button className='primary-hero-button'>
                 GET NOW
                </button>
                <button className='secondary-hero-button'>
                  ADD TO WISHLIST
                </button>
              </div>

          </div>
      </div>
    </div>

    </div>

    <div className='hero-image-container'>
    
    <div className = "hero-image" style={{backgroundImage : `url("https://cdn2.unrealengine.com/egs-alan-wake-2-carousel-desktop-1248x702-355ef4f0ddf5.jpg?h=720&quality=medium&resize=1&w=1280")`}}>
      <div className='hero-item'>
          

          <div className='hero-item-details-container' style={{color:"white"}}>
          <img src='https://cdn2.unrealengine.com/egs-alan-wake-2-carousel-logo-350x100-25d89157f21e.png' alt='hero-title'/>
              <span className='now-available-text'>COMING SOON</span>
              <span className='hero-action-text'>A string of ritualistic murders threatens Bright Falls in the newest psychological survival horror from Remedy.</span>
              <span className='hero-item-price'>Staring at ₹2748.00</span>
              <div className='hero-action-buttons'>
                <button className='primary-hero-button' style={{
                  backgroundColor:"white",color:"black"
                }}>
                 Pre-Order Now
                </button>
                <button className='secondary-hero-button' style={{color:"white", borderColor:"white"}} >
                  ADD TO WISHLIST
                </button>
              </div>

          </div>
      </div>
    </div>

    </div>
    <div className='hero-image-container'>
    
    <div className = "hero-image" style={{backgroundImage : `url("https://cdn2.unrealengine.com/egs-the-expanse-carousel-desktop-1920x1080-79d992de553e.jpg?h=720&quality=medium&resize=1&w=1280")`}}>
      <div className='hero-item'>
          

          <div className='hero-item-details-container' style={{color:"white"}}>
              <img src='https://cdn2.unrealengine.com/egs-the-expanse-carousel-logo-350x67-ff300c37a78d.png' alt='hero-title'/>
              <span className='now-available-text'>Coming July 27</span>
              <span className='hero-action-text'>From scavenging wrecked ships to combating pirates, experience the universe of The Expanse like never before.</span>
              <span className='hero-item-price'>Staring at ₹1429.00</span>
              <div className='hero-action-buttons'>
                <button className='primary-hero-button' style={{
                  backgroundColor:"white",color:"black"
                }}>
                 Pre-Order Now
                </button>
                <button className='secondary-hero-button' style={{color:"white", borderColor:"white"}}>
                  + ADD TO WISHLIST
                </button>
              </div>

          </div>
      </div>
    </div>

    </div>
    </Carousel>
  )
}

export default HeroSlider
