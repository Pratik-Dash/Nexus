import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    
      <div className="about-page">
      <div className="about-content">
        <h2>About Nexus Game Store</h2>
        <p>
          Nexus Game Store is a leading online platform for gamers, providing easy access to a wide range of games for various gaming platforms. Our mission is to make gaming more accessible to the masses by offering a diverse selection of games, from indie gems to popular AAA titles, all in one place.
        </p>
        <p>
          Whether you are a casual gamer or a hardcore enthusiast, Nexus Game Store has something for everyone. With user-friendly features and a seamless browsing experience, finding your favorite games has never been easier.
        </p>
        <p>
          Join us on this gaming journey and explore the vast world of gaming with Nexus Game Store.
        </p>
      </div>
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
   
  )
}

export default About
