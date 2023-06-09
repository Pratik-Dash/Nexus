import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { Link } from 'react-router-dom'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const {products} = useContext(DataContext)
    const [searchResults,setSearchResults] = useState([])
    useEffect(() => {
        performSearch()
    },[searchQuery])
    const handleSearch = (event) => {
        
        setSearchQuery((prevValue) => event.target.value)
        
    }
    const performSearch = () => {
        if (searchQuery.trim() !== '') {
            setSearchResults(
              products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            );
          } else {
            setSearchResults([]);
          }
    }
  return (
    <div className='search-wrapper'>
      <input type='text' placeholder='search store' value = {searchQuery} onChange={handleSearch} className='search-input'/>
      <div>
        {
            searchResults.length > 0 && <div className='search-results'>
                {
                    searchResults.map(searchResult => 
                    <Link to = {`/single-product/${searchResult._id}`} style={{textDecoration:"none",color:"white"}}>
                        <div className='search-result-item' key = {searchResult._id}>
                        <div className='search-item-cover'>
                        <img src = {searchResult.thumbnail} alt = {`search-pic`} className='search-cover'/>
                        </div>
                        <div className='search-item-title'>{searchResult.title}</div>
                        </div>
                        </Link>
                    
                    )
                }    
            </div>
        }
      </div>
    </div>
  )
}

export default Search
