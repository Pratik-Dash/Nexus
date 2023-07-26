import "./App.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import NotFound from "./Pages/NotFound";
import Mockman from "mockman-js"
import { DataContextProvider } from "./Context/DataContext";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import RequireAuth from "./Components/RequireAuth";
import Filters from "./Components/Filters";
import SignUp from "./Pages/sign-up";
import AddressManagement from "./Pages/AddressManagement";
import FinalSummary from "./Pages/FinalSummary";
import Confirmation from "./Pages/Confirmation";
import { Nav } from "./Components/Top-Nav";
import Footer from "./Components/Footer";
import ShowGamesBySelectedCategory from "./Pages/ShowGamesBySelectedCategory";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <Router>
    <div className="App">
   
    <DataContextProvider>
    <Nav/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/selected-category/:categoryName" element = {<ShowGamesBySelectedCategory/>}/>
      <Route path = "/explore" element = {<Filters/>}/>
      <Route path = "/single-product/:id" element = {<SingleProduct/>}/>
      <Route path = "/cart" element = {<RequireAuth><Cart/></RequireAuth>}/>
      <Route path = "/wishlist" element = {<RequireAuth><Wishlist/></RequireAuth>}/>
      <Route path = "/sign-in" element = {<LoginPage/>}/>
      <Route path = "*" element = {<NotFound/>}/>
      <Route path = "/profile" element = {<RequireAuth><Profile/></RequireAuth>}/>
      <Route path = "/signup" element = {<SignUp/>}/>
      <Route path = "/finalsummary" element = {<RequireAuth><FinalSummary/></RequireAuth>}/>
      <Route path = "/manage-addresses" element = {<RequireAuth><AddressManagement/></RequireAuth>}/>
      <Route path = "/confirmation" element = {<RequireAuth><Confirmation/></RequireAuth>}/>
      <Route path = "/mockman" element = {<Mockman/>}/>
    </Routes>
    <ToastContainer/>
    <Footer/>
    </DataContextProvider>
    
    </div>
    </Router>
  );
}

export default App;
