import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'
import ScreenshotSlider from '../Components/ScreenshotSlider'
import ProductActions from '../Components/ProductActions'
import { Nav } from '../Components/Top-Nav'

const SingleProduct = () => {
  const {id} = useParams()
  const {products} = useContext(DataContext)
  const[selectedProduct] = products.filter(product => product._id === id)
  
  
  return(
    <>
    <Nav/>
    <div className='game-title'>
      <h1>
        {selectedProduct.title}
      </h1>
      <div>Rating: {`${selectedProduct.rating} / 5`}</div>
    </div>
    <div className='selected-product'>
    
      <div className='screenshots'>
        <ScreenshotSlider product = {selectedProduct}/>
      </div>
      <div>
        <ProductActions selectedProduct = {selectedProduct}/>
      </div>
    </div>
    </>
  )
}

export default SingleProduct
