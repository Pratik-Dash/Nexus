import React, { useState } from 'react'
import { products } from '../backend/db/products'
import Specs from './Specs'

const ScreenshotSlider = ({product}) => {
    const [currentImage,setCurrentImage] = useState(product.productDetailsImages[0])
   const[readMoreStatus,setReadMoreStatus] = useState(false)
    const clickHandler = (screenshot) =>{
        setCurrentImage(screenshot)
    }
    const readMoreHandler = () => {
      setReadMoreStatus(!readMoreStatus)
    }
  return (
    <>
    <div className='slider-container'>
    <div className='slider'>
    <div style = {{backgroundImage:`url(${currentImage})`}} className='slides'></div>
    </div>
    </div>
    <div className='mini-screenshots'>
      {
        
        product.productDetailsImages.map(screenshot => 
        <div  style={{backgroundImage:`url(${screenshot})`,borderColor:currentImage === screenshot?"purple":""}}
            onClick = {() => clickHandler(screenshot)}
        >

           
        </div>
        )
      }
      
    </div>
    <div className='product-description'>
       {product.description}
       
        {readMoreStatus?
        <div>
          {product.longDesc}
          <div>
            <button onClick = {readMoreHandler} className='read-btn'>READ LESS</button>
          </div>
        </div> :
        <div>
            <button onClick = {readMoreHandler} className='read-btn'>READ MORE</button>
          
        </div> 
        
        
        
        }
        <div className='social'>
          <span>Follow Us</span>
          <div className='social-links'>
            {
              product.socialLinks.map(socialLink => 
                <span><a href={socialLink}>{Object.keys(socialLink)[0]}</a></span>
              )
            }
          </div>
        </div>
        <span>Specifications</span>
        <div>
      <Specs product = {product}/>
     </div>
       </div>
     
    </>
  )
}

export default ScreenshotSlider
