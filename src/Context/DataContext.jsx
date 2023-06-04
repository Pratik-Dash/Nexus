import React,{useEffect, useReducer, useState} from "react"
const DataContext = React.createContext()

const DataContextProvider = ({children}) => {
    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])
    
   
    
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
    try{
      const response = await fetch("/api/user/cart",{
        method:'POST',
        headers:{
          authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0NDEzNTVhNC1kZjAzLTQwZTUtYmJlMi1iNjZkOGU2ODVmYmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.OzsgW2hUP5H1Kai8U3-46-gLsgQKvNDkzJCle4Kta_U"
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
  
  const removeItemFromCart = async(product) => {
    
    try{
        const response = await fetch(`/api/user/cart/${product._id}`,{
          method:'DELETE',
          headers:{
            authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0NDEzNTVhNC1kZjAzLTQwZTUtYmJlMi1iNjZkOGU2ODVmYmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.OzsgW2hUP5H1Kai8U3-46-gLsgQKvNDkzJCle4Kta_U"
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
}

const removeItemFromWishlist = async(product) => {
  debugger
  try{
  const response = await fetch(`/api/user/wishlist/${product._id}`,{
      method:'DELETE',
      headers:{
        authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0NDEzNTVhNC1kZjAzLTQwZTUtYmJlMi1iNjZkOGU2ODVmYmQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.OzsgW2hUP5H1Kai8U3-46-gLsgQKvNDkzJCle4Kta_U"
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





    return (
    
      <DataContext.Provider value = {{products,categories,cartItems,addToCart,setCartItems,removeItemFromCart,wishlistItems,addToWishlist,setWishlistItems,removeItemFromWishlist}}>
       {children}
      </DataContext.Provider>
    
  )
}

export {DataContext,DataContextProvider}
