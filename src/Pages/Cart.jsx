import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import CartItem from '../Components/CartItem'
import CounterComponent from '../Components/CounterComponent'
import { NavLink } from 'react-router-dom'
import { Nav } from '../Components/Top-Nav'
import Summary from '../Components/Summary'

const Cart = () => {
  const{cartItems,setCartItems,addToWishlist,removeItemFromCart,wishlistItems} = useContext(DataContext)
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
    <>
    <Nav/>
    <div>
      <h1>Cart</h1>
      <div className='cart-items'>
      {
         cartItems.length >0? <>
         {cartItems.map(item => <div className='cart-item'><CartItem item={item} cartItems = {cartItems} />
          <div> 
          
              <div><CounterComponent item = {item} updatePriceandCount={updatePriceandCount}/></div>
              <div className='cart-action-buttons'>
                  <button onClick = {() => removeItemFromCart(item)}>Remove</button>
                  {!wishlistItems.find(wishlistitem =>wishlistitem._id === item._id ) ? <button onClick = {() => handleWishListButton(item)}>Move to wishlist</button>:<button>
                    <NavLink to="/wishlist" style={{ textDecoration: "none" }}>
                      View in Wishlist
                    </NavLink>
                                  </button>}
                  
              </div>
          </div>
          </div>)
         }
         <div>
          <Summary cartItems = {cartItems}/>
         </div>
         </>:<div>You dont have any items in your cart</div>
             
         
      }
      </div>
      <div className='summary'>
     
      </div>
    </div>
    </>
  )
}

export default Cart
