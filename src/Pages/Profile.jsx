import React, { useContext } from 'react'
import { DataContext, useData } from '../Context/DataContext'
import { Nav } from '../Components/Top-Nav'
import { Link } from 'react-router-dom'
const Profile = () => {
    const {user,logout} = useContext(DataContext)
    
    const profile = useData()
    const{foundUser:userProfile} = profile.user



  return (
//    <>
//      <Nav/>
//     <div>
//     {console.log(user)}
//       {user? `Hello ${user.foundUser.firstName}`:`Please login`}
//       {
//         user?
//         <div onClick={() => logout()}>Logout</div>:
//         <div><Link to = "/sign-in" style={{textDecoration:"none",color:"black"}}>Login</Link></div>
//       }
//     </div> 
//     </>
<>
    {/* <Nav/> */}
    <div>
    
      {<>
        <header>
        <h1>Profile Page</h1>
        <button className="logout-button" onClick={() => logout()}>Logout</button>
    </header>
    <main>
    <div className="profile-info">
      <h2 className="user-name">Username: {`${userProfile.firstName}+${userProfile.lastName}`}</h2>
      <p className="user-firstname">First Name: {userProfile.firstName}</p>
      <p className="user-lastname">Last Name: {userProfile.lastName}</p>
      <p className="user-address">Address: {userProfile.address.primary}</p>
    </div>
    </main>
    </>}
    </div>
    </>

    

    
  )
}

export default Profile
