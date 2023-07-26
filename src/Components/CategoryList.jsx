import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

const CategoryList = ({responsive}) => {
  const {categories} = useContext(DataContext)
  const navigate = useNavigate()
  return (
    
    <div className='categorylist-container'>
    <Carousel responsive = {responsive} infinite 
          partialVisbile
        >
     { categories.map(category => 
          <div className='cat-card' onClick={() => navigate(`/selected-category/${category.name}`)}>
            <div className='cat-images'>
              {
                category.images.map(image => 
                  <div><img src = {image} alt='action-games'/></div>
                )
              }
            </div>
            <div className='cat-name'>{category.name}</div>
          </div>
      )}
      </Carousel>
    </div>
  )
}

export default CategoryList
