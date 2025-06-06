import React, { useState } from 'react';
import Home from './Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { Link } from 'react-router-dom';



function Navbar() {
  

  
  const [menuOpen, setMenuOpen] = useState(false);
 
  const linkStyle = {
    
    fontFamily: "'Marcellus', serif",
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '0.75rem 1rem',
    display: 'block',
    fontSize: '1.1rem',
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="logo">Cheese Dreams</div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}
        >
          <span />
          <span />
          <span />
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" style={linkStyle} onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/about" style={linkStyle} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" style={linkStyle} onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .navbar-container {
          background-color: transparent;
          color: white;
          padding: 0 2rem;
          height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
        }

        .logo {
          font-weight: bold;
          font-size: 1.8rem;
          padding: 0.5rem 0;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-links a {
          transition: color 0.3s ease;
        }
        
        .nav-links a {
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '10px 15px',
            display: 'block',
            fontFamily: "'Marcellus', serif",
            fontSize: '1.2rem', // Adjust for better visibility
        };

        .navbar-container {
            font-family: 'Marcellus', serif;
            font-size: 1.1rem;
            letter-spacing: 0.5px;
            }



        .nav-links a:hover {
          color: #f4d35e;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 6px;
          width: 30px;
        }

        .hamburger span {
          height: 3px;
          background-color: white;
          border-radius: 2px;
          display: block;
          transition: 0.3s ease;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 2rem;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a {
            width: 100%;
            padding: 1rem 0;
            font-size: 1.2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .logo {
            font-size: 1.6rem;
            padding: 0.5rem 0;
          }

          .navbar-container {
            padding: 0 1.5rem;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
