// import React from 'react'

// const CartSummary = ({itemsInCart}) => {

//     const totalCostOfAllItems = itemsInCart.reduce((totalCost,currentItem) => totalCost + currentItem.totalPrice)
//     const fixedDiscount  = 685
//   return (
//     <div>
//       <h1>Games Summary</h1>
//       <div className='item-summary'>
//       <div className='price-info'>
//       <div className='price-div'><span>Price</span><span>{`${totalCostOfAllItems}.00`}</span></div>
//       <div className='price-div'><span>Price</span><span>{`${totalCostOfAllItems}.00`}</span></div>
//       {/* <div className='copies-div'><span>Copies</span><span>{item.count}</span></div> */}
//       <div className='copies-div'><span>Coupon Discount</span><span>0.00</span></div>
//       <div className='copies-div'><span>Taxes</span><span>Calculated at Checkout</span></div>
//       <hr/>
//       <div className='copies-div'><span>Subtotal</span><span>{`${totalCostOfAllItems-fixedDiscount}.00`}</span></div>
//       </div>
//       <div className='checkout-btn'>
//         <button>Checkout</button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default CartSummary
