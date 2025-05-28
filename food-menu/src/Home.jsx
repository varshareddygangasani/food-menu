import React from 'react';
import backgroundImage from '../public/window.jpg'; // Make sure this path is correct

function Home() {
  const homeStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Playfair Display', serif",
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.3))',
    zIndex: 1,
  };

  const titleContainerStyle = {
    zIndex: 2,
    padding: '40px 60px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontFamily: "'Cinzel Decorative', cursive",
    fontSize: '4.5rem',
    color: 'white',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    
    padding: '1rem 2rem',
    borderRadius: '16px',
    letterSpacing: '2px',
    fontWeight: '600',
    };


 
  const taglineStyle = {
    fontSize: '1.25rem',
    color: '#f0e6d6',
    opacity: 0.9,
    fontStyle: 'normal',
    letterSpacing: '0.5px',
  };

  return (
    <div style={homeStyle}>
      <div style={overlayStyle}></div>
      <div style={titleContainerStyle}>
        <h1 style={titleStyle}>Latte grove</h1>
        <p style={taglineStyle}>Where comfort meets craft</p>
      </div>
    </div>
  );
}

export default Home;
