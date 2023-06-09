import React, { useContext } from 'react'
import { DataContext, useData } from '../Context/DataContext'
import { Nav } from '../Components/Top-Nav'
import { Link } from 'react-router-dom'
const Profile = () => {
    const {user,logout} = useContext(DataContext)
    
  return (

    <div>
    
      {<>
        <header>
        <h1>Profile Page</h1>
        <button className="logout-button" onClick={() => logout()}>Logout</button>
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
