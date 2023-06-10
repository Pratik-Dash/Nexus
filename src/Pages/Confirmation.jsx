import React from 'react'
import UseAnimations from 'react-useanimations';
import radioButton from 'react-useanimations/lib/radioButton';
const Confirmation = () => {
  return (
    <div className='confirmation'>
      <h1>Order Confirmed</h1>
      <UseAnimations animation={radioButton} size={200} style={{color:"white"}} />
    </div>
  )
}

export default Confirmation
