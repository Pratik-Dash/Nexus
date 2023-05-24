import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const NewReleases = () => {
    const {products} = useContext(DataContext)
    const newReleases = products.filter((product) => 
        {
            const currentProductReleaseDate = new Date(product.releaseDate)
            const releaseYear = currentProductReleaseDate.getFullYear()
            
            return releaseYear  === 2023
         }

    )
    console.log(newReleases)
  return (
    <div className='game-tile-container'>
      {newReleases.map(game => {
            
        return <div key = {game.id} className='game-tile' >
        <img src = {game.thumbnail} alt = {game.title} className='game-thumbnail'/>
        <div className='game-info'>
          <div>{game.title}</div>
          <div>₹{game.price}</div>
          </div>
        </div>
            
            
      })}
    </div>
  )
}

export default NewReleases
