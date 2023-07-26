import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'

const UpcomingGames = () => {
  const navigate = useNavigate()
  const {products} = useContext(DataContext)
  if(!products){
    return <div>Loading...</div>
  }
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const upcomingGames = products.filter((product) => 
      {
          const productReleaseDate = new Date(product.releaseDate)
          const releaseMonth = productReleaseDate.getMonth()
          const releaseYear = productReleaseDate.getFullYear()
         
         
          return (releaseMonth  > currentMonth && releaseYear >= 2023)
       }

  )
  return (
    <div className='upcoming-games-container'>
      {
        upcomingGames.map(game => 
            <div className='upcoming-game-card' onClick={() => navigate(`/single-product/${game._id}`)}>
                <div className='upcoming-game-info'>
                    <span className='game-price'>Available {game.releaseDate}</span>
                    <span className='pre-order-text'>Pre-Order Now</span>
                </div>
                <div className='upcoming-game-thumbnail'><img src = {game.thumbnail1} className='upcoming-game-image'/></div>
            </div>
        )
        
      }
    </div>
  )
}

export default UpcomingGames
