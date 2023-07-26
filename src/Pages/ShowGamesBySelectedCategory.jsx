import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'

const ShowGamesBySelectedCategory = () => {
    
    const {categoryName} = useParams()
    const {products} = useContext(DataContext)
    const filteredProductsByCategory = products.filter(game => game.categoryName.includes(categoryName) && !game.categoryName.includes('pre-order') )
    const navigate = useNavigate()
  return (
    
    <>
    <div className='home-section-headings'>{categoryName} Games</div>
    <div className='game-tile-container'>
    {filteredProductsByCategory.map(game => {
                
                return <div key = {game.id} className='game-card' onClick={() => navigate(`/single-product/${game._id}`)} >
                <img src = {game.thumbnail} alt = {game.title} className='game-game-image'/>
                <div className='game-card-info'>
                <span className='game-title'>{game.title}</span>
                <span className='game-price'>{game.price === 0? `Free`: `₹${game.price}`}</span>
                </div>
                
                </div>
                    
                    
              })}
    </div>
    </>
  )
}

export default ShowGamesBySelectedCategory

