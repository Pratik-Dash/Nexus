
import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const ProductActions = ({selectedProduct}) => {
   
  return (
    <div className='product-info'>
    <div>
        <div >
            <img src = {selectedProduct.thumbnail} className='product-image' alt = "game-thumbnail"/>
            <div className='price-tag' style={{fontWeight:700}}>₹{selectedProduct.price}</div>
        </div>
    </div>
      <div className='action-buttons'>
      
        <button className='primary'>BUY NOW</button>
        <button>ADD TO CART</button>
        <button>ADD TO WISHLIST</button>
      </div>
      <div className='game-details'>
        <div><span>Developer</span><span>{selectedProduct.developer}</span></div>
        <div><span>Publisher</span><span>{selectedProduct.publisher}</span></div>
        <div><span>Release date</span> <span>{selectedProduct.releaseDate}</span></div>
        <div><span>Platform</span> <span>Windows</span></div>
    
      </div>
      </div>
      
      
  )
}

export default ProductActions
