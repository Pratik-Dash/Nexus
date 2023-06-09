import { useContext, useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { DataContext } from "../Context/DataContext"
import Search from "./Search"
export const Nav = () => {
    const {user} = useContext(DataContext)
   
    
    
    
    return <nav className = "top-nav">
    <Link to="/">
    <div className = "logo">nexus</div>
    </Link>
        
        <div className="search-bar">
            <Search/>
        </div>        
        <div className = "action-buttons">
        <Link to = "/wishlist">
        <button className="wishlist-button action-button">Wishlist</button>
        </Link>
        <Link to = "/explore">
        <button className="wishlist-button action-button">Explore</button>
        </Link>
        <Link to = "/cart">
        <button className="cart-button action-button">Cart</button>
        </Link>
        <Link to = "/profile">
        <button className="cart-button action-button">Profile</button>
        </Link>
         {!user? <Link to = "/sign-in">
        <button className="cart-button action-button">Login</button>
        </Link>:<div>{user.firstName}</div>}
        </div>
    </nav>
}