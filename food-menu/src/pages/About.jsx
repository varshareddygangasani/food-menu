import React from 'react';
import Footer from '../Footer';
import './About.css'; // ✅ import the CSS file

const backgroundImage = '/window.jpg';

function About() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to <span style={styles.brand}>Latte Groves</span></h1>
        <p style={styles.text}>
          Nestled in the heart of your city, Latte Groves is more than just a cafe – it’s an experience. 
          From ethically sourced beans to artisan brews, we craft every cup with love and excellence. 
          Whether you need a quiet nook to work or a cozy spot to catch up with friends, our space was designed with you in mind.
        </p>
        <p style={styles.text}>
          Enjoy the aroma of freshly brewed coffee, indulge in our seasonal treats, and let the warmth of our ambiance 
          make you feel right at home.
        </p>

        {/* ✅ Add class for image, no inline styles */}
        <img src="/window.jpg" alt="Latte Groves interior" className="about-image" />
      </div>
      <Footer/>
    </div>

  );
}

// No changes to your existing styles
const styles = {
  wrapper: {
    position: 'fixed',
    inset: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: "'Poppins', sans-serif",
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(10,10,0,0.5))',
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    margin: '100px auto',
    width: '95%',
    maxWidth: '900px',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
    padding: '40px 30px',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.8rem',
    marginBottom: '20px',
  },
  brand: {
    fontFamily: "'Cinzel Decorative', cursive",
    color: '#d7a86e',
    fontSize: '2.5rem',
    
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#f3e9df',
    marginBottom: '20px',
  },
};

export default About;
