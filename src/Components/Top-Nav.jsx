import { useContext, useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"
import { DataContext } from "../Context/DataContext"
import Search from "./Search"
export const Nav = () => {
    const {user} = useContext(DataContext)
    const navigate = useNavigate()
    
    
    
    return <nav className = "top-nav">
    <div className = "logo" onClick={()=>navigate("/")}>NEXUS</div>
   
        <div className="menu-btn">
        
        </div>
        <div className="search-bar">
            <Search/>
        </div> 
        <div className="nav-icon" onClick={() => navigate("/explore")}>
        <span class="material-symbols-outlined">explore</span>
        <div>Explore</div>
        </div>
        <div className="nav-icon" onClick={() => navigate("/cart")}>
        <span class="material-symbols-outlined">shopping_cart</span>
        <div>Cart</div> 
        </div>
        <div className="nav-icon" onClick={() => navigate("/wishlist")}>
        <span class="material-symbols-outlined">loyalty</span>
            <div>Wishlist</div>
        </div>        
        {!user?
        <div className="nav-icon" onClick={() => navigate("/sign-in")}>
        <span class="material-symbols-outlined">login</span>
       
        <div>Login</div>
        </div>
       :<div onClick={() => navigate("/profile")}><img src = {user.profileImage} alt="nav-profile-image" className="nav-profile-image"/></div>}
        
        
        
    </nav>
}