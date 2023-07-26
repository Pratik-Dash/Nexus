import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'
import ScreenshotSlider from '../Components/ScreenshotSlider'
import ProductActions from '../Components/ProductActions'
import { Nav } from '../Components/Top-Nav'
import ClipLoader   from "react-spinners/ClipLoader";
const SingleProduct = () => {
  const {id} = useParams()
  const {products} = useContext(DataContext)
  const[selectedProduct] = products.filter(product => product._id === id)
  if(!selectedProduct){
    return <div className='loading-page'>
        <ClipLoader color="#09b9b9" size={50}/>
    </div>
  }
  const  responsive={
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
  }
  return(
    <div className='main-single-product-container'>
    
    <div className='game-title-container'>
      <div className='selected-game-title'>
        {selectedProduct.title}
      </div>
      <div className='selected-game-rating'>Rating: {`${selectedProduct.rating} / 5`}</div>
    </div>
    <div className='selected-product'>
    
      <div className='screenshots'>
        <ScreenshotSlider product = {selectedProduct} responsive = {responsive}/>
      </div>
      <div>
        <ProductActions selectedProduct = {selectedProduct}/>
      </div>
    </div>
    </div>
  )
}

export default SingleProduct
