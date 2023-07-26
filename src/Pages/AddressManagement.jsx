import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import Add_Address_Modal from '../Components/Add Address odal'
import { toast } from 'react-toastify';
const AddressManagement = () => {
    
    const{addresses,selectedAddress,setSelectedAddress,setAddresses} = useContext(DataContext)
    const getAddresses = () => {
        const keys = Object.keys(addresses);
    
        if (keys.length === 0) {
          return <div className='home-section-headings'>No address exists</div>;
        }
    const handleAddressSelection = (key) => {
        setSelectedAddress(key)
        
    }
    const deleteAddress =(key) => {
        const listOfAddresses = {...addresses}
        delete listOfAddresses[key]
        setAddresses({...listOfAddresses})
        toast('Address deleted successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
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
    <div className='address-container'>
      {  getAddresses()}
      <Add_Address_Modal/>
    </div>
    
    </>

  )
   
  
}

export default AddressManagement
