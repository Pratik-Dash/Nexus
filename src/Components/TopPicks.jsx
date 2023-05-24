import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const TopPicks = () => {
    const {products} = useContext(DataContext)
    const topPicks = products.filter(product => product.rating>4.0) 
    return (
        <div className='game-tile-container'>
          {topPicks.map(game => {
                
            return <div key = {game.id} className='game-tile' >
            <img src = {game.thumbnail} alt = {game.title} className='game-thumbnail'/>
            <div className='game-info'>
            <div>{game.title}</div>
            <div>{game.price === 0? `Free`: `₹${game.price}`}</div>
            </div>
            
            </div>
                
                
          })}
        </div>
      )
}

export default TopPicks
