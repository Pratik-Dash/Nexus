import React, { useContext } from 'react'
import WishlistItem from '../Components/WishlistItem'
import { DataContext } from '../Context/DataContext'
import { Nav } from '../Components/Top-Nav'
import { Link } from 'react-router-dom'
import ClipLoader   from "react-spinners/ClipLoader";
const Wishlist = () => {
  const {wishlistItems,addToCart,cartItems,removeItemFromWishlist,wishlistloading,loading} = useContext(DataContext)
  return (
    <>
    <div className='wishlist-page'>
      {wishlistItems.length >0 && <div className='home-section-headings'>My Wishlist</div>}
      <div className='wishlist-container'>
      {
        wishlistItems.length > 0?
       
        wishlistItems.map(item =>
          
          <div className='wishlist-item'>
     <div className='wishlist-item-image'><img src = {item.thumbnail} alt = "wishlist-thumbnail"/></div>
     <div className='wishlist-item-info'>
        <div className='wishlist-title-and-pricing'>
            <span>{item.title}</span>
            <span>{item.price}</span>
        </div>
        <div className='wishlist-action-buttons'>
            <div onClick={() => removeItemFromWishlist(item)}>{!wishlistloading?`REMOVE`:<ClipLoader color="#09b9b9" size={10}/>}</div>
           { !cartItems.find(cartItem => cartItem._id === item._id)?<div onClick = {() => addToCart(item)}>{!loading?`ADD TO CART`:<ClipLoader color="#09b9b9" size={10}/>}</div>: <div><Link to = "/cart" style={{textDecoration:"none",color:"#666666"}}>VIEW IN CART</Link></div>}
        </div>
     </div>
    </div>):<div className='home-section-headings'>Your Wishlist is empty</div>
      }
      </div>
    </div>
    </>
  )
}

export default Wishlist
