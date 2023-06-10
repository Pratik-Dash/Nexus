import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import Add_Address_Modal from '../Components/Add Address odal'
import { Nav } from '../Components/Top-Nav'

const AddressManagement = () => {
    
    const{addresses,selectedAddress,setSelectedAddress,setAddresses} = useContext(DataContext)
    const getAddresses = () => {
        const keys = Object.keys(addresses);
    
        if (keys.length === 0) {
          return <p>No address exists</p>;
        }
    const handleAddressSelection = (key) => {
        setSelectedAddress(key)
    }
    const deleteAddress =(key) => {
        const listOfAddresses = {...addresses}
        delete listOfAddresses[key]
        setAddresses({...listOfAddresses})
    }
        return(
         
            <table className="address-table">
            <thead>
              <tr>
              <th>Select</th>
                <th>Type</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key) => (
                <tr key={key}>
                <td>
                <input
                  type="radio"
                  name="address"
                  value={key}
                  checked={selectedAddress === key}
                  onChange={() => handleAddressSelection(key)}
                />
                </td>
                  <td>{key}</td>
                  <td>{addresses[key]?.street}</td>
                  <td>{addresses[key]?.city}</td>
                  <td>{addresses[key]?.state}</td>
                  <td><button onClick = {() => deleteAddress(key)} className = "delete-address-row">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
                
        ) 
        

    }
  return (
    <>
    <Nav/>
    <div className='address-container'>
      {  getAddresses()}
      <Add_Address_Modal/>
    </div>
    
    </>

  )
   
  
}

export default AddressManagement
