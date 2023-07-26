import { toast } from 'react-toastify';
import React, { useContext,useEffect,useState } from 'react'
import { DataContext } from '../Context/DataContext'
import ClipLoader   from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';
const ProductActions = ({selectedProduct}) => {
const navigate = useNavigate()
  
const {addToCart,cartItems,removeItemFromCart,wishlistItems,addToWishlist,loading,wishlistloading} = useContext(DataContext)
const [cartButtonAction,setCartAction] = useState({label:'',action:() => {}})
const [wishlistButtonAction,setWishlistButtonAction] = useState({label:'',action:() => {}})
const preOrderGame = selectedProduct.categoryName.includes("pre-order")
useEffect(() => {
  const ifItemInCart = cartItems.find(item => item._id === selectedProduct._id)
  if(ifItemInCart){
    setCartAction({label:'REMOVE FROM CART',action:() => {removeItemFromCart(selectedProduct)
      toast.success('Item removed from cart', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }})
  }
  else{
    setCartAction({label:'ADD TO CART',action:() => {addToCart({...selectedProduct})}})
  }
},[selectedProduct,addToCart,cartItems])
useEffect(() => {
  const itemInWishlist = wishlistItems.find(item => item._id === selectedProduct._id)
  if(itemInWishlist){
    setWishlistButtonAction({label:'IN WISHLIST', action:() => navigate("/wishlist")})
  }
  else{
    setWishlistButtonAction({label:'ADD TO WISHLIST',action:() => {addToWishlist(selectedProduct)}})
  }
},[selectedProduct,addToWishlist,wishlistItems])

const buyNow = () => {

  const ifItemInCart = cartItems.find(item => item._id === selectedProduct._id)
  if(!ifItemInCart){
    addToCart(selectedProduct)
    navigate("/cart")
  }
  else{
    navigate("/cart")
  }
}
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
      
        <button className='primary' onClick={buyNow}>{preOrderGame?'PRE-ORDER NOW':'BUY NOW'}</button>
        <button onClick={cartButtonAction.action}>{!loading? cartButtonAction.label:<ClipLoader color="#09b9b9" size={20}/>}</button>
        <button onClick = {wishlistButtonAction.action}>{!wishlistloading?wishlistButtonAction.label:<ClipLoader color="#09b9b9" size={20}/>}</button>
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
