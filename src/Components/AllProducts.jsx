import React, { useContext } from 'react'
import { DataContext} from '../Context/DataContext'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const{filterState} = useContext(DataContext)
  const {filterProducts} = filterState
  return (
    <div className="game-grid">
    {filterProducts.map((game) => (
      <Link to={`single-product/${game._id}`} style={{textDecoration:"none"}} className="game-item" key={game.id}>
        <img src={game.thumbnail} alt={game.title} className="game-cover" />
        <div className="game-details">
        <p className="game-price">{game.title}</p>
          <p className="game-price">${game.price}</p>
          <div className="game-genres">
            {game.categoryName.map((category) => (
              <span className="genre" key={category}>{category}</span>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </div>

  )
}

export default AllProducts
