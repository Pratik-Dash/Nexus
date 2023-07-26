import React, { useContext,useEffect,useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import ClipLoader   from "react-spinners/ClipLoader";
import { toast } from 'react-toastify'
const FinalSummary = () => {
    const {addresses,selectedAddress,user,cartItems,removeItemFromCart,orders,checkoutLoading} = useContext(DataContext)
    const{savedItems,discountPercent,totalPrice,finalPrice} = orders
    const navigate = useNavigate()
    
    const shippingMethods = [
        {
          id: 1,
          name: 'Normal Shipping',
          description: 'Standard shipping method with regular delivery time',
          price: 0
        },
        {
          id: 2,
          name: 'Express Shipping',
          description: 'Fast shipping method with expedited delivery',
          price: "20Rs. extra"
        }
      ];
      const[shippingPrice,setShippingPrice] = useState(0)
      const[selectedShipping,setShipping] = useState(1)
      useEffect(() => {
        if(selectedShipping === 2){
          setShippingPrice(20)
        }
        else{
          setShippingPrice(0)
        }
      },[selectedShipping])
      const handleConfirmation = () => {
        cartItems.map(cartItem => 
          removeItemFromCart(cartItem)
          )
          setTimeout(() => {
            navigate("/confirmation")
          }, 1000) 
          toast.success('Order Placed Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          setTimeout(() => {
            navigate('/');
          }, 2000); 
          
      }
  return (
    <div className='finalsummary-container'>
      <div className='summary-address-delivery-info'>
      <div className='cust-info-title'>Customer Info</div>
        <div className='summary-address-info'>
       
        <div className='user-personal-info'>
            <span>{`First Name: ${user.firstName}`}</span>
            <span>{`Last Name: ${user.lastName}`}</span>
            </div>
        </div>
        <div className='user-address-info'>
        <div className='address-column'>
            <input type = "text" className='summary-address-inputs' placeholder='Street' value = {selectedAddress?addresses[selectedAddress].street:""} required/>
            <input type = "text" className='summary-address-inputs' placeholder='City' value = {selectedAddress?addresses[selectedAddress].city:""} required/></div>
            <div className='address-column'>
            <input type = "text" className='summary-address-inputs' placeholder='State' value = {selectedAddress?addresses[selectedAddress].state:""} required/>
            <input type = "text" className='summary-address-inputs' placeholder='PIN' value = {selectedAddress?addresses[selectedAddress].pin:""} required/></div>
        </div>
        <div className='final-summary-items'>
        <div className='summary-header'>{`Items Ordered`}</div>
        
          {
            
            savedItems.map(savedItem => 
            <div className='order'>
                <span>{savedItem.title}</span>
                <span> X {savedItem.count}</span>
                <span>{savedItem.price}</span>
            </div>
            
            )
           
          }
          <div  className='order'>
          <span>Total</span>
          <span>{totalPrice}</span>
          </div>
          <div className='order'>
            <span>Discount</span>
            <span>{discountPercent?discountPercent:0}%</span>
          </div>
          <div className='order'>
            <span>Final</span>
            <span>{finalPrice + shippingPrice}</span>
          </div>
        </div>
        <div className='summary-delivery-info'>
        <div className='summary-header'>Shipping Methods</div>
            {
                shippingMethods.map(shippingMethod => 
                
                <div className='shipping-method' key={shippingMethod.id} onClick={() => setShipping(shippingMethod.id) } style = {{backgroundColor:selectedShipping===shippingMethod.id?"#097b7b18":""}}>
                    <div>{shippingMethod.name}{selectedShipping=== shippingMethod.id &&<span>✓</span>}</div>
                    <div className='shipping-pricing-info'>
                        
                        <div>{shippingMethod.description}</div>
                        <div>{shippingMethod.price}</div>
                    </div>
                </div>
                )
            }
        </div>
        <div className='mode-of-payment'>
            <span>Mode of Payment:</span>
            <span>Cash on Delivery</span>
        </div>
        <div className='place-order'>
            <button onClick = {handleConfirmation}>{!checkoutLoading?`Place Order`:<ClipLoader color="#fff" size={20}/>}</button>
        </div>
      </div>
    </div>
  )
}

export default FinalSummary
