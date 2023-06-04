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
  const removeFromCart = () => {
    console.log("removed")
  }
    return (
    
      <DataContext.Provider value = {{products,categories,cartItems,addToCart,setCartItems,removeFromCart}}>
       {children}
      </DataContext.Provider>
    
  )
}

export {DataContext,DataContextProvider}
