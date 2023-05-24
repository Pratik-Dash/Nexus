import React,{useEffect, useState} from "react"
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
  
    return (
    
      <DataContext.Provider value = {{products,categories}}>
       {products === null?"product": children}
      </DataContext.Provider>
    
  )
}

export {DataContext,DataContextProvider}
