import React, { useState } from 'react';
import Footer from '../Footer';

const backgroundImage = '/window.jpg';

const menuItems = [
  { name: 'Espresso', description: 'Strong and bold, served in a small cup.', price: 120, image: 'public/espresso.png' },
  { name: 'Cappuccino', description: 'Espresso with steamed milk foam.', price: 150, image: 'public/cappuccino.png' },
  { name: 'Latte', description: 'Smooth blend of espresso and milk.', price: 160, image: 'public/latte.png' },
  { name: 'Americano', description: 'Espresso diluted with hot water.', price: 130, image: 'public/americano.png' },
  { name: 'Mocha', description: 'Espresso, chocolate syrup and steamed milk.', price: 170, image: 'public/mocha.png' },
  { name: 'Cold Brew', description: 'Slow-steeped coffee served chilled.', price: 180, image: 'public/coldbrew.png' },
];

function Menu() {
  const [quantities, setQuantities] = useState(Array(menuItems.length).fill(0));
  const [showPopup, setShowPopup] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ id: '', total: 0 });

  const handleQuantityChange = (index, delta) => {
    setQuantities(prev => {
      const updated = [...prev];
      updated[index] = Math.max(0, updated[index] + delta);
      return updated;
    });
  };

  const calculateTotal = () => {
    const subtotal = quantities.reduce((acc, qty, index) => acc + qty * menuItems[index].price, 0);
    const tax = subtotal * 0.1;
    return subtotal + tax ;
  };

  const handleOrder = () => {
    const total = calculateTotal();
    const orderId = 'ORD' + Math.floor(Math.random() * 100000);
    setOrderDetails({ id: orderId, total });
    setShowPopup(true);
    setQuantities(Array(menuItems.length).fill(0));
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.backgroundOverlay} />

      <div style={styles.menuWrapper}>
        <div style={styles.scrollArea}>
          {menuItems.map((item, index) => (
            <div key={index} style={styles.menuItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.textContent}>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.description}>{item.description}</div>
                <div style={styles.price}>₹{item.price}</div>
              </div>
              <div style={styles.controls}>
                <button onClick={() => handleQuantityChange(index, -1)} style={styles.btn}>−</button>
                <span style={styles.qty}>{quantities[index]}</span>
                <button onClick={() => handleQuantityChange(index, 1)} style={styles.btn}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.summary}>
          <button onClick={handleOrder} style={styles.orderButton}>Place Order</button>
        </div>
      </div>

      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupBox}>
            <h2 style={styles.popupTitle}>Order Confirmed 🎉</h2>
            <p style={styles.popupText}>Order ID: <strong>{orderDetails.id}</strong></p>
            <p style={styles.popupText}>Total Amount(Including all tax): <strong>₹{orderDetails.total.toFixed(2)}</strong></p>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      
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
    background: 'linear-gradient(to bottom right, rgba(0,0,0,0.75), rgba(0,0,0,0.5))',
    zIndex: 1,
  },
  menuWrapper: {
    zIndex: 2,
    margin: '100px auto 20px',
    width: '95%',
    maxWidth: '1000px',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(18px)',
    borderRadius: '20px',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 140px)',
    overflow: 'hidden',
    boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
  },
  scrollArea: {
    overflowY: 'auto',
    flex: 1,
    paddingRight: 10,
    marginBottom: 10,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '14px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
    flexWrap: 'wrap',
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 10,
    objectFit: 'cover',
    marginRight: 20,
    flexShrink: 0,
  },
  textContent: {
    flex: 1,
    minWidth: 180,
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffeb99',
    fontFamily: "'Playfair Display', serif",
  },
  description: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: '#f5e9d0',
    margin: '5px 0',
  },
  price: {
    fontWeight: '600',
    color: '#ffd966',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: 10,
  },
  btn: {
    fontSize: '1.2rem',
    padding: '4px 12px',
    background: '#ffd166',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333',
  },
  qty: {
    fontSize: '1.1rem',
    width: '30px',
    textAlign: 'center',
  },
  summary: {
    display: 'flex',
    justifyContent: 'center',
  },
  orderButton: {
    background: '#ff6f61',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 6px 14px rgba(0,0,0,0.45)',
  },
  popupOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.65)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  popupBox: {
    background: 'linear-gradient(to right, #ffe3a3, #ffd6ba)',
    color: '#333',
    padding: '30px',
    borderRadius: '18px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.45)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '400px',
  },
  popupTitle: {
    marginBottom: 10,
    fontSize: '1.6rem',
    color: '#c44536',
  },
  popupText: {
    fontSize: '1.1rem',
    marginBottom: 10,
  },
  closeBtn: {
    marginTop: 20,
    background: '#c44536',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Menu;
