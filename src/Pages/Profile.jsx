import React, { useContext } from 'react'
import { DataContext, useData } from '../Context/DataContext'
import { Nav } from '../Components/Top-Nav'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Profile = () => {
    const {user,logout} = useContext(DataContext)
    const navigate = useNavigate()
  return (

    <div>
    
      {<>
        <header>
        <h1>Profile Page</h1>
        <div>
        <button className="logout-button" onClick={() => logout()}>LOGOUT</button>
        <button className="logout-button" onClick={() => navigate("/")}>HOME</button>
        <button className="logout-button" onClick={() => navigate("/manage-addresses")}>SELECT ADDRESS</button>
        </div>
    </header>
    <main>
    <div className="profile-info">
      <h2 className="user-name">Username: {`${user.firstName}+${user.lastName}`}</h2>
      <p className="user-firstname">First Name: {user.firstName}</p>
      <p className="user-lastname">Last Name: {user.lastName}</p>
      <p className="user-address">Address: {user.address && user.address.primary}</p>
    </div>
    </main>
    </>}
    </div>
   

    

    
  )
}

export default Profile
