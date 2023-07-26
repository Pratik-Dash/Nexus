import React,{useContext, useEffect, useReducer, useState} from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DataContext = React.createContext()

const DataContextProvider = ({children}) => {
    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const [loading,setLoading] = useState(false)
    const [wishlistloading,setwishlistLoading] = useState(false)
    const [checkoutLoading,setCheckoutLoading] = useState(false)
    const navigate = useNavigate()
  
  useEffect(() => {

    const fetchData = async() =>{
        const productResponse = await fetch("/api/products")
        const {products} = await productResponse.json()
        const categoryResponse = await fetch("/api/categories")
        const{categories} = await categoryResponse.json()
        setProducts(products)
        setCategories(categories)
        
        
    } 
    fetchData()
  },[setProducts,setCategories])

  //cart logic
  
  const[cartItems,setCartItems] = useState([])
  useEffect(() => {
    if(cartItems.length > 0){
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    else{
      localStorage.removeItem("cartItems")
    }
  }, [cartItems]);
  
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  const addToCart = async(product) =>{
    setLoading(true)
   const getCurrentUser = localStorage.getItem("user")
   if(getCurrentUser){
    const userObj = JSON.parse(getCurrentUser)
    var encodedToken = userObj.token
    try{
      const response = await fetch("/api/user/cart",{
        method:'POST',
        headers:{
          authorization:encodedToken
        },
        body:JSON.stringify({product})
      })
      if(response.ok){
        const data = await response.json()
        setCartItems((prevCartItems) => data.cart)
        setLoading(false)
        toast.success('Item added to Cart', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else{
        
        toast.error('Cannot add product to cart', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    }
    catch(error){
      console.log(error)
    }
  }
  else{
    navigate("/sign-in")
    return 
  }
}

  
  const removeItemFromCart = async(product) => {
    setLoading(true)
    setCheckoutLoading(true)
    const getUser = localStorage.getItem("user")
    const userObj = JSON.parse(getUser)
    const encodedToken = userObj.token
    if(encodedToken)
    {
    try{
        const response = await fetch(`/api/user/cart/${product._id}`,{
          method:'DELETE',
          headers:{
            authorization:encodedToken
          }
        })
        if(response.ok){
          const data = await response.json()
          setCartItems((prevState) =>data.cart)
          setLoading(false)
          setCheckoutLoading(false)
          
         
        }
        else{
          console.log("Cannot remove product from cart")
        }
    }
    catch(error){
      console.log(error)
    }
  }
  }
//wishlist logic
const[wishlistItems,setWishlistItems] = useState([])

useEffect(() => {
  
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  
}, [wishlistItems]);

useEffect(() => {
  const storedWishListItems = localStorage.getItem("wishlist");
  if (storedWishListItems) {
    setWishlistItems(JSON.parse(storedWishListItems));
  }
}, []);

const addToWishlist = async(product) => {
  setwishlistLoading(true)
  const getUser = localStorage.getItem("user")
  const userObj = JSON.parse(getUser)
  const encodedToken = userObj?.token
  if(encodedToken){
  const productAlreadyExists = wishlistItems.find(item => item._id === product._id)
  if(!productAlreadyExists){
  try{
      const response = await fetch("/api/user/wishlist",{
        method:'POST',
        headers:{
          authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0NDEzNTVhNC1kZjAzLTQwZTUtYmJlMi1iNjZkOGU2ODVmYmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.OzsgW2hUP5H1Kai8U3-46-gLsgQKvNDkzJCle4Kta_U"
        },
        body:JSON.stringify({product})

      })
      if(response.ok){
          const data = await response.json()
          setWishlistItems(data.wishlist)
          setwishlistLoading(false)
          toast.success('Item added to Wishlist', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }
      else{
       
        toast.error('cannot add product to wishlist', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    
  }
  catch(error){
    console.log(error)
  }
}
  }else{
    navigate("/sign-in")
  }
}


const removeItemFromWishlist = async(product) => {
  setwishlistLoading(true)
  const getUser = localStorage.getItem("user")
  const currentUser = JSON.parse(getUser)
  const encodedToken = currentUser?.token

  try{
  const response = await fetch(`/api/user/wishlist/${product._id}`,{
      method:'DELETE',
      headers:{
        authorization:encodedToken
      }
  })
  if(response.ok){
    const data = await response.json()
    setWishlistItems((prevState) =>data.wishlist)
    setwishlistLoading(false)
    toast.success('Item removed from wishlist', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  else{
   
    toast.error('cannot remove item from wishlist', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
}
catch(error){
  console.log(error)
}
}
//Auth Logic
const [user,setUser] = useState(null)
    
    useEffect(() => {
       
      localStorage.setItem("user",JSON.stringify({...user}))
      if(!user){
        localStorage.removeItem("user")
      }
        
    },[user])
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    },[])
    const [loginStatus,setLoginStatus] = useState()
    const login = async ({ email, password }) => {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          const { foundUser: user, encodedToken: token } = data;
          setUser({ ...user, token });
          setAddresses({ ...addresses, primaryAddress: user?.addresses?.userAddress });
          setLoginStatus(true);
          toast.success("Welcome Back!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
           
          });
         navigate("/")
        } else {
          if (response.status === 401) {
            toast.error("Invalid Credentials, Please try again.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error("Unable to login. Please try again later.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
          setLoginStatus(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("An unexpected error occurred. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoginStatus(false);
      }
    };
    
    const logout = () => {
        localStorage.clear()
        setUser(null)

    }

//Address Management
const [addresses, setAddresses] = useState({});
const [selectedAddress,setSelectedAddress] = useState("primaryAddress")
useEffect(() => {
  localStorage.setItem("addresses", JSON.stringify(addresses));
}, [addresses, user?.addresses?.userAddress]);

useEffect(() => {
  const storedAddresses = localStorage.getItem("addresses");
  if (!storedAddresses) {
    setAddresses({ primaryAddress: user?.addresses?.userAddress });
  } else {
    setAddresses(JSON.parse(storedAddresses));
  }
}, []);

//signup logic
useEffect(() => {
  if(user){
      localStorage.setItem("user",JSON.stringify({...user}))
  }
},[user])
useEffect(() => {
  const getNewUser = localStorage.getItem("user")
  if(getNewUser){
      setUser(JSON.parse(getNewUser))
  }
},[])

const signUpUser = async({firstName,lastName,email,pass,profileImage}) => {
  console.log(firstName)
  console.log(lastName)
  console.log(email)
  console.log(pass)
    try{
        const response = await fetch("/api/auth/signup",{
            method:'POST',
            body:JSON.stringify({email,pass,firstName,lastName,profileImage})
            
        })
        console.log(response)
        console.log(response.ok)
        if(response.ok){
            
            const data = await response.json()
            const { createdUser: user, encodedToken: token } = data;
            setUser({ ...user, token });
            toast.success('Welcome to Nexus', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
        }
        else{
           
            toast.error('Unable to signup', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
        }
    }
    catch(error){
        console.log(error)
    }
}

//order management
const [orders,setOrders] = useState({})


    return (
      
      <DataContext.Provider value = {{products,categories,cartItems,addToCart,setCartItems,removeItemFromCart,wishlistItems,addToWishlist,setWishlistItems,removeItemFromWishlist,user,setUser,addresses,setAddresses,login,logout,signUpUser,selectedAddress,setSelectedAddress,orders,setOrders,loginStatus,loading,wishlistloading,checkoutLoading}}>
       {children}
      </DataContext.Provider>
    
  )
}

export {DataContext,DataContextProvider}
export const useData = () => {
  return useContext(DataContext)
}