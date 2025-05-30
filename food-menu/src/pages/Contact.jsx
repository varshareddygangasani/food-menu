import React, { useState } from 'react';
import Footer from '../Footer';

const backgroundImage = '/window.jpg';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', feedback: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after submit
    setFormData({ name: '', email: '', message: '', feedback: '' });

    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.backgroundOverlay} />

      <div style={styles.contentWrapper}>
        <h1 style={styles.heading}>Let's Chat Over <span style={styles.brand}>Coffee</span></h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} style={styles.input} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={styles.input} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={styles.textarea} required />
          <textarea name="feedback" placeholder="Your Feedback (optional)" value={formData.feedback} onChange={handleChange} style={styles.textarea} />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        {submitted && <div style={styles.successMessage}>Thanks for reaching out! ☕</div>}
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    position: 'fixed',
    inset: 0,
    overflow: 'hidden',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  },
  backgroundOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom right, rgba(13, 10, 10, 0.8), rgba(14, 16, 14, 0.6))',
    zIndex: 1,
  },
  contentWrapper: {
    zIndex: 2,
    margin: '90px auto 20px',
    width: '95%',
    maxWidth: '850px',
    background: 'rgba(255, 248, 235, 0.07)',
    backdropFilter: 'blur(14px)',
    borderRadius: '20px',
    padding: '30px 25px',
    boxShadow: '0 12px 34px rgba(0, 0, 0, 0.55)',
    height: 'calc(100vh - 130px)',
    overflowY: 'auto',
  },
  heading: {
    fontSize: '2.4rem',
    fontFamily: "'Playfair Display', serif",
    fontWeight: '700',
    color: '#fbe6c2',
    marginBottom: '25px',
    textAlign: 'center',
  },
  brand: {
    color: '#d7a86e',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 18px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#fdf2e9',
    color: '#5c3d2e',
  },
  textarea: {
    padding: '14px 18px',
    fontSize: '1rem',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#fdf2e9',
    color: '#5c3d2e',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#8b5e3c',
    border: 'none',
    padding: '12px 22px',
    fontSize: '1.1rem',
    borderRadius: '12px',
    color: '#fff7ec',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  successMessage: {
    marginTop: '20px',
    padding: '10px 15px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#ffe6d0',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

// Add a slight hover effect (optional)
styles.button[':hover'] = {
  backgroundColor: '#a76f4d',
};

export default Contact;
