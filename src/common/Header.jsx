import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  // Define inline styles for the header, nav, and list items
  const headerStyle = {
      backgroundColor: 'aqua',
      padding: '10px 0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const navStyle = {
      display: 'flex',
      justifyContent: 'center',
  };

  const ulStyle = {
      listStyle: 'none',
      display: 'flex',
      gap: '15px',
      margin: 0,
      padding: 0,
  };

  const linkStyle = {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
      fontSize: '14px',
  };

  return (
      <header style={headerStyle}>
          <nav style={navStyle}>
              <ul style={ulStyle}>
                  <li><Link to="/" style={linkStyle}>Home</Link></li>
                  <li><Link to="/About" style={linkStyle}>About</Link></li>
                  <li><Link to="/Course" style={linkStyle}>Course</Link></li>
                  <li><Link to="/Blog" style={linkStyle}>Blog</Link></li>
                  <li><span style={linkStyle}>Contact Us</span></li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;
