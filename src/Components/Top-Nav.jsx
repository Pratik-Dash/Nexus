import { useContext } from "react"
import {Link} from "react-router-dom"
import { DataContext } from "../Context/DataContext"
export const Nav = () => {
    const {user} = useContext(DataContext)
    return <nav className = "top-nav">
    <Link to="/">
    <div className = "logo">nexus</div>
    </Link>
        
        <div className = "search"><input type = "text" className="search-input" placeholder="search..."/>
        <button className="search-button">{`search`}</button>
        </div>
        <div className = "action-buttons">
        <Link to = "/wishlist">
        <button className="wishlist-button action-button">Wishlist</button>
        </Link>
        <Link to = "/cart">
        <button className="cart-button action-button">Cart</button>
        </Link>
        <Link to = "/profile">
        <button className="cart-button action-button">Profile</button>
        </Link>
         {!user? <Link to = "/sign-in">
        <button className="cart-button action-button">Login</button>
        </Link>:<div>{user.foundUser.firstName}</div>}
        
        
        
        </div>
    </nav>
}