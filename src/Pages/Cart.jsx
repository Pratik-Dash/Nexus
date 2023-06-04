import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import CartItem from '../Components/CartItem'
import CartSummary from '../Components/CartSummary'
import CounterComponent from '../Components/CounterComponent'

const Cart = () => {
  const{cartItems,setCartItems} = useContext(DataContext)
  const updatePrice = (updatedProduct) =>{
    
    const index = cartItems.findIndex(item => item._id === updatedProduct._id)
    if(index !== -1){
      const updatedCartItems = [...cartItems]
      updatedCartItems[index].totalPrice = updatedProduct.totalPrice
      setCartItems(() => updatedCartItems)
    }
   
  }
  return (
    <div>
      <h1>Cart</h1>
      <div className='cart-items'>
      {
          cartItems.length>0 ? 
          <>
          {cartItems.map(item => <div className='cart-item'><CartItem item={item} cartItems = {cartItems} />
          <div> 
              <div><CounterComponent item = {item} updatePrice={updatePrice}/></div>
              <div className='cart-action-buttons'>
                  <button>Remove</button>
                  <button>Move to wishlist</button>
              </div>
          </div>
          </div>)}
          </>:<div>You dont have any items in your cart</div>
      }
      </div>
      <div className='summary'>
      {/* <CartSummary itemsInCart = {cartItems}/> */}
      </div>
    </div>
  )
}

export default Cart
