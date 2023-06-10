import React, { useContext,useEffect,useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'

const FinalSummary = () => {
    const {addresses,selectedAddress,user} = useContext(DataContext)
    const{orders} = useContext(DataContext)
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
          navigate("/confirmation")
          setTimeout(() => {
            navigate('/');
          }, 3000); 
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
                <span>{savedItem.count}</span>
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
                
                <div className='shipping-method' key={shippingMethod.id} onClick={() => setShipping(shippingMethod.id) } style = {{backgroundColor:selectedShipping===shippingMethod.id?"#A100FF10":""}}>
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
            <span>Mode of Payment</span>
            <span>Cash on Delivery</span>
        </div>
        <div className='place-order'>
            <button onClick = {handleConfirmation}>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default FinalSummary
