export const Nav = () => {
    return <nav class = "top-nav">
        <div className = "logo">nexus</div>
        <div classname = "search"><input type = "text" className="search-input" placeholder="search..."/>
        <button className="search-button">{`search`}</button>
        </div>
        <div className = "action-buttons">
        <button className="login-button">Login</button>
        <button className="wishlist-button">Wishlist</button>
        <button className="cart-button">Cart</button>
        </div>
    </nav>
}