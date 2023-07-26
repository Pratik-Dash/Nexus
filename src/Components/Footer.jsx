import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoTwitter,IoLogoGithub,IoLogoLinkedin } from 'react-icons/io';


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
          <NavLink to="/products" activeClassName="active-link">Products</NavLink>
          <NavLink to="/about" activeClassName="active-link">About</NavLink>
        </div>
        <div className="footer-social">
        <span>Get in touch:</span>
          <a href="https://twitter.com/Prateek24675372" className="social-icon"><IoLogoTwitter/></a>
          <a href="https://github.com/Pratik-Dash" className="social-icon"><IoLogoGithub/></a>
          <a href="https://www.linkedin.com/in/pratik-dash-5a7217134/" className="social-icon"><IoLogoLinkedin/></a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
