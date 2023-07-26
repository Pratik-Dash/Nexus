import React, { useState } from 'react'
import { products } from '../backend/db/products'
import Specs from './Specs'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ScreenshotSlider = ({product}) => {
    const [currentImage,setCurrentImage] = useState(product.productDetailsImages[0])
   const[readMoreStatus,setReadMoreStatus] = useState(false)
    const clickHandler = (screenshot) =>{
        setCurrentImage(screenshot)
    }
    const readMoreHandler = () => {
      setReadMoreStatus(!readMoreStatus)
    }
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
  return (
    <div className='screenshot-main-container'>
    <div style={{ width: '100%' }} className='screenshots-carousel-container'>
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots={false}
        infinite
        autoPlay={false}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {product.productDetailsImages.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image} alt={`Image ${index}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
    
    <div className='product-description'>
    <div className='product-description-container'>
    {product.description}
    </div>
      
       
        {readMoreStatus?
        <div className='product-description-container open'>
          {product.longDesc}
          <div>
            <button onClick = {readMoreHandler} className='read-btn'>READ LESS</button>
          </div>
        </div> :
        <div>
            <button onClick = {readMoreHandler} className='read-btn'>READ MORE</button>
          
        </div> 
        
        
        
        }
        {product.socialLinks?<div className='social'>
          <span>Follow Us</span>
          <div className='social-links'>
            {
              product.socialLinks.map(socialLink => 
                <span><a href={socialLink}>{Object.keys(socialLink)[0]}</a></span>
              )
            }
          </div>
        </div>:<></>}
        <span>Specifications</span>
        <div>
      <Specs product = {product}/>
     </div>
       </div>
     
    </div>
  )
}

export default ScreenshotSlider
