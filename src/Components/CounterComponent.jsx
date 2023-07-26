import React, { useContext,useEffect,useReducer, useState } from 'react'


const CounterComponent = ({item,updatePriceandCount}) => {
    
    const increment = () =>{
        dispatch({type:'INCREMENT'})
      }
      const decrement = () => {
        dispatch({type: 'DECREMENT'})
      }
      const reducer = (count,action) => {
        switch(action.type){
          case 'INCREMENT':
            return  count < 5 ? count + 1 : count;
          case 'DECREMENT':
            return count > 1 ? count - 1 : count;
          default:
            return count !== undefined ? count : 1
        }
      }
      const [count, dispatch] = useReducer(reducer, item.count !== undefined ? item.count : 1);
      const[currentTotalPrice,setTotalPrice] = useState(item.totalPrice)
      
      useEffect(() => {
        const updatedProduct = {
            ...item,
            totalPrice:count * item.price,
            count:count
        }
        setTotalPrice(() => updatedProduct.price)
        updatePriceandCount(updatedProduct)
        console.log(updatedProduct.totalPrice)
      },[count,item])
        

  return (
    <div>
      <div className='counter'>
              <button onClick={decrement}>-</button>
              <span>{`  ${count}   `}</span>
              <button onClick={increment}>+</button>
            </div>
    </div>
  )
}

export default CounterComponent
