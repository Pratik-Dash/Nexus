import React from 'react'
import { Link } from 'react-router-dom'
const WishlistItem = ({item,addToCart,cartItems,removeItemFromWishlist}) => {
  return (
    <div className='wishlist-item'>
     <div className='wishlist-item-image'><img src = {item.thumbnail} alt = "wishlist-thumbnail"/></div>
     <div className='wishlist-item-info'>
        <div className='wishlist-title-and-pricing'>
            <span>{item.title}</span>
            <span>{item.price}</span>
        </div>
        <div className='wishlist-action-buttons'>
            <div onClick={() => removeItemFromWishlist(item)}>Remove</div>
           { !cartItems.find(cartItem => cartItem._id === item._id)?<div onClick = {() => addToCart(item)}>Add To cart</div>: <div><Link to = "/cart" style={{textDecoration:"none",color:"white"}}>View in cart</Link></div>}
        </div>
     </div>
    </div>
  )
}

export default WishlistItem
