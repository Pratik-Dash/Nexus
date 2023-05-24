import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const FreeGame = () => {
  const {products} = useContext(DataContext)
  const freeGames = products.filter(product => 
    product.price === 0
    ) 
    return (
      <div className='game-tile-container'>
        {freeGames.map(game => {
              
          return <div key = {game.id} className='game-tile' >
          <img src = {game.thumbnail} alt = {game.title} className='game-thumbnail'/>
          <div className='game-info'>
          <div>{game.title}</div>
          <div>{game.price === 0 && `Free`}</div>
          </div>
          
          </div>
              
              
        })}
      </div>
    )
}

export default FreeGame
