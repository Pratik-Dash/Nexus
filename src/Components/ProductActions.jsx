
import React, { useContext,useEffect,useState } from 'react'
import { DataContext } from '../Context/DataContext'


const ProductActions = ({selectedProduct}) => {
const {addToCart,cartItems,removeFromCart,wishlistItems,addToWishlist} = useContext(DataContext)
const [cartButtonAction,setCartAction] = useState({label:'',action:() => {}})
const [wishlistButtonAction,setWishlistButtonAction] = useState({label:'',action:() => {}})
useEffect(() => {
  const ifItemInCart = cartItems.find(item => item._id === selectedProduct._id)
  if(ifItemInCart){
    setCartAction({label:'REMOVE FROM CART',action:() => {removeFromCart(selectedProduct)}})
  }
  else{
    setCartAction({label:'ADD TO CART',action:() => {addToCart({...selectedProduct})}})
  }
},[selectedProduct,addToCart,cartItems])
useEffect(() => {
  const itemInWishlist = wishlistItems.find(item => item._id === selectedProduct._id)
  if(itemInWishlist){
    setWishlistButtonAction({label:'IN WISHLIST', action:() => {console.log("remove from wishlist logic here")}})
  }
  else{
    setWishlistButtonAction({label:'ADD TO WISHLIST',action:() => {addToWishlist(selectedProduct)}})
  }
},[selectedProduct,addToWishlist,wishlistItems])
  return (
    <div className='product-info'>
    <div>
        <div >
            <img src = {selectedProduct.thumbnail} className='product-image' alt = "game-thumbnail"/>
            <div className='product-metrics'>
            <div className='price-tag' style={{fontWeight:700}}>₹{selectedProduct.price}</div>
            
            
            </div>
        </div>
    </div>
      <div className='action-buttons'>
      
        <button className='primary'>BUY NOW</button>
        <button onClick={cartButtonAction.action}>{cartButtonAction.label}</button>
        <button onClick = {wishlistButtonAction.action}>{wishlistButtonAction.label}</button>
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
