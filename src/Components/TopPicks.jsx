import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TopPicks = ({responsive}) => {
    const {products} = useContext(DataContext)
    const navigate = useNavigate()
    const topPicks = products.filter(product => product.rating>4.0) 
    return (
        <div className='game-tile-container'>
        <Carousel responsive = {responsive} infinite autoPlay autoPlaySpeed={2000}
          partialVisbile
        >
          {topPicks.map(game => {
                
            return <div key = {game.id} className='game-card' onClick={() => navigate(`single-product/${game._id}`)} >
            <img src = {game.thumbnail} alt = {game.title} className='game-game-image'/>
            <div className='game-card-info'>
            <span className='game-title'>{game.title}</span>
            <span className='game-price'>{game.price === 0? `Free`: `₹${game.price}`}</span>
            </div>
            
            </div>
                
                
          })}
          </Carousel>
        </div>
      )
}

export default TopPicks
