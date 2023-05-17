import {Link} from "react-router-dom"
export const Nav = () => {
    return <nav class = "top-nav">
    <Link to="/">
    <div className = "logo">nexus</div>
    </Link>
        
        <div classname = "search"><input type = "text" className="search-input" placeholder="search..."/>
        <button className="search-button">{`search`}</button>
        </div>
        <div className = "action-buttons">
        <Link to = "/sign-in">
        <button className="login-button action-button">Login</button>
        </Link>
        <Link to = "wishlist">
        <button className="wishlist-button action-button">Wishlist</button>
        </Link>
        <Link to = "cart">
        <button className="cart-button action-button">Cart</button>
        </Link>
        
        
        
        </div>
    </nav>
}