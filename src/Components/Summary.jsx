import React, { useContext,useState,useEffect } from 'react'
import Discount from './discount'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'


const Summary = ({cartItems}) => {
    const {setOrders} = useContext(DataContext)
    const navigate = useNavigate()
    const [discountPercent,setDiscountPercent] = useState(5)
    const [discountText,setDiscountText] = useState("")
    const [shippingFee,setShippingFee] = useState(0)
    const getTotalPriceOfAllItemsOnCart = () => {
        const totalPriceofAllItems = cartItems.reduce((totalPrice,currentItem) => totalPrice + currentItem.totalPrice,0)
         return totalPriceofAllItems
         
     }
     const totalPrice = getTotalPriceOfAllItemsOnCart()
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
    
    const finalPrice = calculateDiscountedPrice(totalPrice) + shippingFee
    
    const handleCheckout = () => {
       setOrders({savedItems:cartItems,discountPercent,totalPrice,finalPrice})
       navigate("/finalsummary")
    }
  return (
    <div className='summary-container'>
    <div className='summary-header'><span>Cart Items Summary</span></div>
     <div className='cart-summary'>
        {
            <div>
            {cartItems.map(cartItem => 
            <>
                <div className='individual-cart-item'>
                    <span>{cartItem.title}</span>
                    <span>{` X ${cartItem.count}`}</span>
                    <span>{`₹${cartItem.totalPrice}`}</span>
                </div>
                <hr/>
                </>
            
            )}
            <div>
    <div className='total-cart-price-after-discount'>
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
    </div>
            </div>
        }
       
        <div className='checkout-btn' onClick={handleCheckout}>CHECK OUT</div>
     </div>
    </div>
  )
}

export default Summary
