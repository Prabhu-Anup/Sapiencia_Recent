import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const location = useLocation();
  // const isHome = location.pathname === '/';

  return (
    <nav className="navbar fixed-nav">
      <div className="navbar-logo">
        <a href="/">
        <img src="\no_backg_logo.jpeg" alt="Logo" className="navbar-logo-img" />
        <div className='company_name'><p>Sapiencia.AI</p></div>
        </a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/contact" className="cta-button-demo">Request Demo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
