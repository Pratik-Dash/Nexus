import React, { useState, useEffect } from 'react'

const Discount = ({totalPrice}) => {
    const [discountPercent,setDiscountPercent] = useState(5)
    const [discountText,setDiscountText] = useState("")
    const [shippingFee,setShippingFee] = useState(0)
    useEffect(() => {
        if(totalPrice < 3000){
            setDiscountPercent(5)
            setShippingFee(50)
             setDiscountText("Get 10% off and free shipping when you spend ₹3000.00 or more on eligible items.")
         }
         else if(totalPrice < 5000){
             setDiscountPercent(10)
             setShippingFee(0)
             setDiscountText("Get 15% off when you spend ₹5000.00 or more on eligible items.")
         }
         else if(totalPrice < 10000){
             setDiscountPercent(15)
             setShippingFee(0)
             setDiscountText("Get 20% off when you spend ₹10000.00 or more on eligible items.")
         }
         else{
            setDiscountPercent(20)
            setShippingFee(0)
            setDiscountText("Congratulations!, you are eligible for the mega discount of 20%")
         }
    },[totalPrice])
    const calculateDiscountedPrice = (price) => {
        return price - price * (discountPercent / 100);
      };
    
    const finalPrice = calculateDiscountedPrice() + shippingFee
    
  return (
    <div>
    <div className='discount-applicable'>
        <span>Applicable discount </span>
        <span>{`${discountPercent}%`}</span>
    </div>
    <div className='discount-info'>
        {discountText}
    </div>
    <hr/>
    <div className='shipping-charge'>
        <span>Shipping charges </span>
        <span>{`₹${shippingFee}`}</span>
        
    </div>
    <hr/>
    <div className='discount-applicable'>
        <span>Taxes</span>
        <span>calculated at checkout</span>
        
    </div>
    <hr/>
    <div className='price-after-dicsount'>
       <span className='subtotal'>Subtotal</span>
       <span><s>₹{totalPrice}</s></span>
       <span>₹{finalPrice}</span>
    </div>
    
    </div>
  )
}

export default Discount
