import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import {useNavigate } from 'react-router-dom';

const Filters = () => {
  const navigate = useNavigate()
  const { products } = useContext(DataContext);
  const [priceRange, setPriceRange] = useState(4000);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProducts = products.filter((product) => {
    const price = product.price;
    if (price > priceRange) {
      return false;
    }

    if (categoryFilter.length > 0) {
      let foundMatch = false;
      for (const category of product.categoryName) {
        if (categoryFilter.includes(category)) {
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        return false;
      }
    }

    if (ratingFilter !== null && product.rating !== ratingFilter) {
      return false;
    }

    return true;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const handlePriceChange = (event) => {
    const { value } = event.target;
    setPriceRange(Number(value));
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategoryFilter((prevFilters) => [...prevFilters, value]);
    } else {
      setCategoryFilter((prevFilters) => prevFilters.filter((filter) => filter !== value));
    }
  };

  const handleRatingChange = (event) => {
    const { value } = event.target;
    setRatingFilter(value !== '' ? Number(value) : null);
  };

  const handleSortOrderChange = (event) => {
    const { value } = event.target;
    setSortOrder(value);
  };

  const resetFilters = () => {
    setPriceRange(4000);
    setCategoryFilter([]);
    setRatingFilter(null);
    setSortOrder('asc');
  };

  return (
    <div className='filter-page'>
    <div className='home-section-headings'>Explore</div>
    <div className='explore-main-container'>
    <div className="filter-container">
    <div className='home-section-headings'>Filters</div>

      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-range">
          <input
            type="range"
            min={0}
            max={4000}
            value={priceRange}
            onChange={handlePriceChange}
          />
          <div>Max Price: ${priceRange}</div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Category</h3>
        <div className="category-filter">
          <label>
            <input
              type="checkbox"
              value="Action"
              onChange={handleCategoryChange}
              checked={categoryFilter.includes('Action')}
            />
            Action
          </label>
          <label>
            <input
              type="checkbox"
              value="Adventure"
              onChange={handleCategoryChange}
              checked={categoryFilter.includes('Adventure')}
            />
            Adventure
          </label>
          <label>
            <input
              type="checkbox"
              value="Horror"
              onChange={handleCategoryChange}
              checked={categoryFilter.includes('Horror')}
            />
            Horror
          </label>
          <label>
            <input
              type="checkbox"
              value="Open World"
              onChange={handleCategoryChange}
              checked={categoryFilter.includes('Open World')}
            />
            Open World
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h3>Rating</h3>
        <div className="rating-filter">
          <label>
            <input
              type="radio"
              name="rating"
              value=""
              onChange={handleRatingChange}
              checked={ratingFilter === null}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={5}
              onChange={handleRatingChange}
              checked={ratingFilter === 5}
            />
            5 Stars
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={4}
              onChange={handleRatingChange}
              checked={ratingFilter === 4}
            />
            4 Stars
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={3}
              onChange={handleRatingChange}
              checked={ratingFilter === 3}
            />
            3 Stars
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h3>Sort By Price</h3>
        <div className="sort-order">
          <label>
            <input
              type="radio"
              name="sort"
              value="asc"
              onChange={handleSortOrderChange}
              checked={sortOrder === 'asc'}
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="desc"
              onChange={handleSortOrderChange}
              checked={sortOrder === 'desc'}
            />
            High to Low
          </label>
        </div>
      </div>

      <button className="filter-reset-button" type="button" onClick={resetFilters}>
        Reset
      </button>
      </div>
      <div className='games-container'>
      <div className='games'>
      <div className="game-tile-container">
      {sortedProducts.map(game => {
                
                return <div key = {game.id} className='game-card' onClick={() => navigate(`/single-product/${game._id}`)} >
                <img src = {game.thumbnail} alt = {game.title} className='game-game-image'/>
                <div className='game-card-info'>
                <span className='game-title'>{game.title}</span>
                <span className='game-price'>{game.price === 0? `Free`: `₹${game.price}`}</span>
                <div className='game-genre'>
                  {
                    game.categoryName.map(genre => 
                      <span className='cart-tag'>{genre}</span>
                    )
                  }
                </div>
                </div>
                
                </div>
                    
                    
              })}
  </div>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Filters;
