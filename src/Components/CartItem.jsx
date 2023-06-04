import React from 'react'
import CounterComponent from './CounterComponent'

const CartItem = ({item,cartItems}) => {
  
  return (
    <div className='cart-components'>
    <div>

    <div className='cart-image-title'>
        <div><img src = {item.thumbnail} className='cart-game-image' alt='game-thumbnail'/></div>
        <div className='cart-game-title'>{item.title}</div>
        <div className='cart-price-info'>
       
        <div className='total-price'><div className='off-percent'>-35%</div>{` `}<s>₹14999</s>{` ₹${item.totalPrice}`}</div>
    </div>
        
    </div>
    
   
    </div>
    </div>
  )
}

export default CartItem
