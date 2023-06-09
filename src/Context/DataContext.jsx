import React,{useContext, useEffect, useReducer, useState} from "react"
import { useNavigate } from "react-router-dom"

const DataContext = React.createContext()

const DataContextProvider = ({children}) => {
    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])
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
   const getCurrentUser = localStorage.getItem("user")
   if(getCurrentUser){
    const userObj = JSON.parse(getCurrentUser)
    var encodedToken = userObj.token
    console.log(encodedToken)
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
        
      }
      else{
        console.log("Cannot add product to cart")
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
      }
      else{
        console.log("cannot add product to wishlist")
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
  }
  else{
    console.log("cannot remove item from wishlist")
  }
}
catch(error){
  console.log(error)
}
}
//Auth Logic
const [user,setUser] = useState(null)
    
    useEffect(() => {
        if(user){
            localStorage.setItem("user",JSON.stringify({...user}))
        }
    },[user])
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    },[])
    const login = async({email,password}) => {
       debugger
        try{
            const response = await fetch("/api/auth/login",{
                method:'POST',
                body:JSON.stringify({email,password})
            })
            if(response.ok){
                const data = await response.json()
                const { foundUser: user, encodedToken: token } = data;
                setUser({ ...user, token });
            }
            else{
                console.log("Unable to login")
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

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

const signUpUser = async({firstName,lastName,email,pass}) => {
  console.log(firstName)
  console.log(lastName)
  console.log(email)
  console.log(pass)
    try{
        const response = await fetch("/api/auth/signup",{
            method:'POST',
            body:JSON.stringify({email,pass,firstName,lastName})
            
        })
        console.log(response)
        console.log(response.ok)
        if(response.ok){
            
            const data = await response.json()
            const { createdUser: user, encodedToken: token } = data;
            setUser({ ...user, token });
        }
        else{
            console.log("Unable to signup")
        }
    }
    catch(error){
        console.log(error)
    }
}





















    return (
      
      <DataContext.Provider value = {{products,categories,cartItems,addToCart,setCartItems,removeItemFromCart,wishlistItems,addToWishlist,setWishlistItems,removeItemFromWishlist,user,login,logout,signUpUser}}>
       {children}
      </DataContext.Provider>
    
  )
}

export {DataContext,DataContextProvider}
export const useData = () => {
  return useContext(DataContext)
}