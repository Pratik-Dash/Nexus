import React, { useContext } from 'react'
import WishlistItem from '../Components/WishlistItem'
import { DataContext } from '../Context/DataContext'

const Wishlist = () => {
  const {wishlistItems,addToCart,cartItems,removeItemFromWishlist} = useContext(DataContext)
  return (
    <div>
      <h1>Wishlist</h1>
      <div className='wishlist-container'>
      {
        wishlistItems.length > 0?wishlistItems.map(item => <WishlistItem item  = {item} addToCart = {addToCart} cartItems = {cartItems} removeItemFromWishlist = {removeItemFromWishlist}/>):`No items in your wishlist`
      }
      </div>
    </div>
  )
}

export default Wishlist
