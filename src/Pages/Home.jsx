import React, { useContext } from 'react'
import HeroSlider from '../Components/HeroSlider'
import NewReleases from '../Components/NewReleases'
import FreeGame from '../Components/FreeGame'
import TopPicks from '../Components/TopPicks'
import { DataContext } from '../Context/DataContext'
import { Nav } from '../Components/Top-Nav'

const Home = () => {
  return (
    <>
    <Nav/>
    <div>
  
      <h1>Amazing Deals</h1>
      <div className='slider-container'>
        <HeroSlider/>
      </div>
      <h1>New releases</h1>
      <div>
        <NewReleases/>
      </div>
      <h1>Top Picks</h1>
      <div>
      <TopPicks/>
      </div>
      
      <h1>Play for free</h1>
      <div>
        <FreeGame/>
      </div>
    </div>
    </>
  )
}

export default Home
