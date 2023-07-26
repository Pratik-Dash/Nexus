import React, { useContext } from 'react'
import HeroSlider from '../Components/HeroSlider'
import NewReleases from '../Components/NewReleases'
import TopPicks from '../Components/TopPicks'
import UpcomingGames from '../Components/UpcomingGames'
import CategoryList from '../Components/CategoryList'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Home = () => {
  return (
    <>
   
    <div>
      <div className='slider-container'>
        <HeroSlider responsive = {responsive}/>
      </div>
      <div className='home-section-headings'>New Releases</div>
      <div>
        <NewReleases responsive = {responsive}/>
      </div>
      <div className='home-section-headings'>Top Picks</div>
      <div>
      <TopPicks responsive = {responsive}/>
      </div>
      <div className='home-section-headings'>Popular Genres</div>
      <CategoryList responsive = {responsive}/>
    </div>
    </>
  )
}

export default Home
