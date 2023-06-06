import "./App.css";
import { Nav } from "./Components/Top-Nav";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import NotFound from "./Pages/NotFound";
import Mockman from "mockman-js"
import { DataContextProvider } from "./Context/DataContext";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import RequireAuth from "./Components/RequireAuth";


function App() {
  return (
    
    <Router>
    <div className="App">
    
    <DataContextProvider>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      {/* <Route path = "/search" element = {<Search/>}/> */}
      <Route path = "/all-products" element = {<ProductListing/>}/>
      <Route path = "/single-product/:id" element = {<SingleProduct/>}/>
      <Route path = "/cart" element = {<RequireAuth><Cart/></RequireAuth>}/>
      <Route path = "/wishlist" element = {<RequireAuth><Wishlist/></RequireAuth>}/>
      <Route path = "/sign-in" element = {<LoginPage/>}/>
      <Route path = "*" element = {<NotFound/>}/>
      <Route path = "/profile" element = {<RequireAuth><Profile/></RequireAuth>}/>
      <Route path = "/mockman" element = {<Mockman/>}/>
    </Routes>
    </DataContextProvider>
    
    </div>
    </Router>
  );
}

export default App;
