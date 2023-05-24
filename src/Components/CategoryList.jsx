import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const CategoryList = () => {
  const {categories} = useContext(DataContext)
  return (
    <div className='game-tile-container'>
     { categories.map(category => 
          <div className='game-tile'>{category.categoryName}</div>
      )}
    </div>
  )
}

export default CategoryList
