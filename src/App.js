import "./App.css";
import { Nav } from "./Components/Top-Nav";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import ProductListing from "./Pages/ProductListing";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    
    <Router>
    <div className="App">
    <Nav/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/search" element = {<Search/>}/>
      <Route path = "/all-products" element = {<ProductListing/>}/>
      <Route path = "/single-product/:id" element = {<SingleProduct/>}/>
      <Route path = "cart" element = {<Cart/>}/>
      <Route path = "wishlist" element = {<Wishlist/>}/>
      <Route path = "sign-in" element = {<SignIn/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
      
    </div>
    </Router>
  );
}

export default App;
