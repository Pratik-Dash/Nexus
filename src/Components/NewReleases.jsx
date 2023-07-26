import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const NewReleases = ({responsive}) => {
    const navigate = useNavigate()
    const {products} = useContext(DataContext)
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const newReleases = products.filter((product) => 
        {
            const currentProductReleaseDate = new Date(product.releaseDate)
            const releaseYear = currentProductReleaseDate.getFullYear()
            const releaseMonth = currentProductReleaseDate.getMonth()
            return (releaseYear  === 2023 && releaseMonth <= currentMonth )
         }

    )
    
   
  return (
    <div className='game-tile-container'>
    <Carousel responsive = {responsive} infinite autoPlay autoPlaySpeed={2000}
          partialVisbile
        >
      {newReleases.map(game => 

        <div className='game-card' onClick={() => navigate(`/single-product/${game._id}`)}>
          <img src = {game.thumbnail} alt = {game.title} className='game-image'/>
          <div className='game-card-info'>
            <span className='game-title'>{game.title}</span>
            <span className='game-price'>{game.price}</span>
          </div>
        </div>)
}
</Carousel>
</div>)
}

export default NewReleases
