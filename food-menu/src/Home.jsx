import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../public/window.jpg';
import './Home.css'; // Import the new CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="title-container">
        <h1 className="home-title">Latte grove</h1>
        <p className="home-tagline">Where comfort meets craft</p>
        <button
          className="order-button"
          onClick={() => navigate('/menu')}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Home;
