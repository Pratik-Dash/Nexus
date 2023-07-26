import React, { useContext, useState } from 'react'
import { DataContext, useData } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Profile = () => {
    const {user,logout,setUser} = useContext(DataContext)
    
    const [editMode,setEditMode] = useState(false)
    const [saveButtonEnabled,setSaveButtonEnabled] = useState(false)
    const[firstName,setFirstName] = useState(user.firstName)
    const[lastName,setLastName] = useState(user.lastName)
    const[address,setAddress] = useState(user.email)
    const navigate = useNavigate()
    const enableEdit = () => {
      setEditMode(() => true)
      setSaveButtonEnabled(true)
    }
    const handleFirstNameChange = (firstName) => {

      setSaveButtonEnabled(true)
      setFirstName(firstName)

    }
    const handleLastNameChange = (lastName) => {

      setSaveButtonEnabled(true)
      setLastName(lastName)

    }
    const handleAddressChange = (address) => {

     
      setAddress(address)

    }
    const saveChanges = () => {
      const updatedUser = {...user, firstName,lastName,address}
      setUser(() => updatedUser)
      setEditMode(false)
      setSaveButtonEnabled(false)
      toast.success('Save Successful!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  return (

    <div>
    
      {<div className='profile-page'>
        <header>
        <h1>Profile Page</h1>
        <div>
        <button className="logout-button" onClick={() => logout()}>LOGOUT</button>
        <button className="logout-button" onClick={() => navigate("/")}>HOME</button>
        <button className="logout-button" onClick={() => navigate("/manage-addresses")}>SELECT ADDRESS</button>
        </div>
    </header>
    <div className='profile-details-container'>
    <div className='profile-image-container'>
      
      <img src = {user.profileImage} alt='profile-avatar' className='profile-image'/>
     
    </div>
    <div className="profile-info">
    <div className='profile-edit-btn-container'>
    {
      saveButtonEnabled?<button className='save-info' onClick={saveChanges}>SAVE CHANGES</button>:<button className='edit-profile-info' onClick={enableEdit}>EDIT DETAILS</button>
    }
      
      </div>
      <div className="user-name">Username: {`${firstName}+${lastName}`}</div>
      <label>
        First Name:
        <input type='text'placeholder='Enter first name' value = {firstName} className='profile-inputs' disabled = {!editMode} onChange={(event) =>handleFirstNameChange(event.target.value)}/>
      </label>
      <label>
        Last Name:
        <input type='text'placeholder='Enter last name' value = {lastName} className='profile-inputs' disabled = {!editMode} onChange={(event) =>handleLastNameChange(event.target.value)}/>
      </label>
      <label>
        Email:
        <input type='text'placeholder='Enter Address' value = {address} className='profile-inputs' disabled = {!editMode} onChange={(event) =>handleAddressChange(event.target.value)}/>
      </label>
    </div>
    </div>
    </div>}
    </div>
   

    

    
  )
}

export default Profile
