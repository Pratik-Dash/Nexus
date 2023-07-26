import ClipLoader   from "react-spinners/ClipLoader";
import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import CounterComponent from '../Components/CounterComponent'
import { NavLink } from 'react-router-dom'
import Summary from '../Components/Summary'
import { toast } from 'react-toastify'
const Cart = () => {
  const{cartItems,setCartItems,addToWishlist,removeItemFromCart,wishlistItems,wishlistloading,loading} = useContext(DataContext)
  console.log(wishlistItems)
  const updatePriceandCount = (updatedProduct) =>{
    
    const index = cartItems.findIndex(item => item._id === updatedProduct._id)
    if(index !== -1){
      const updatedCartItems = [...cartItems]
      updatedCartItems[index].totalPrice = updatedProduct.totalPrice
      updatedCartItems[index].count = updatedProduct.count
      setCartItems(() => updatedCartItems)
    }
   
  }
  
  const handleWishListButton = (item) => {
      addToWishlist(item)
      removeItemFromCart(item)
  }
  return (
    <div className='cart-page'>
    {
      cartItems.length === 0? <div className='home-section-headings'>Your Cart is empty</div>:
      <>
      <div className='home-section-headings'>My Cart</div>
      <div className='cart-item-container'>
    <div className='individual-cart-items'>

   
      {
        cartItems.map(item => 
          <div className='cart-item'>
      <div className='cart-item-image-details-container'>
        <div className='cart-item-image-container'>
          <img className='cart-item-image' src={item.thumbnail} alt = {item.title}/>
        </div>
        <div className='cart-item-info'>
          <span>{item.title}</span>
          <div className='cart-game-tags'>
           {
            item.categoryName.map(category =>
                <span className='cart-tag'>{category}</span>
            )
           }
          </div>
        </div>
      </div>
      <div className='cart-item-price-container'>
        <span className='cart-item-price'>₹{item.price}</span>
        <div className='cart-item-counter'>
        <div><CounterComponent item = {item} updatePriceandCount={updatePriceandCount}/>
          <div className='cart-actions'>
          <button onClick = {() => {removeItemFromCart(item)
          toast.success('Item removed from cart', {position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",
});
          }}>{!loading?`REMOVE`:<ClipLoader color="#09b9b9" size={10}/>}</button>
                  {!wishlistItems.find(wishlistitem =>wishlistitem._id === item._id ) ? <button onClick = {() => handleWishListButton(item)}>{!wishlistloading?`MOVE TO WISHLIST`:<ClipLoader color="#09b9b9" size={10}/>}</button>:<button>
                    <NavLink to="/wishlist" style={{ textDecoration: "none" }}>
                     VIEW IN WISHLIST
                    </NavLink>
                                  </button>}
          </div>
        </div>
      </div>
      </div>
      
    </div>
        )
      }
      </div>
      <div>
          <Summary cartItems = {cartItems}/>
         </div>

    </div>
    </>
    }
    
    </div>
  )
}
export default Cart
