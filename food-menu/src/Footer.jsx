// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialMediaContainer = {
    position: 'absolute',
    bottom: '20px',
    display: 'flex',
    gap: '20px',
    zIndex: 2,

// left: '50%',
//     transform: 'translateX(-50%)',
  };

  const iconStyle = {
    color: 'white',
    fontSize: '1.8rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={socialMediaContainer}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
      </a>
    </div>
  );
};

export default Footer;
