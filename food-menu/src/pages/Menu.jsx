// Menu.js
import React, { useState } from 'react';
import './Menu.css';

const backgroundImage = '/window.jpg';

const menuItems = [
  { name: 'Espresso', description: 'Strong and bold, served in a small cup.', price: 120, image: 'images/espresso.png' },
  { name: 'Cappuccino', description: 'Espresso with steamed milk foam.', price: 150, image: 'images/cappuccino.png' },
  { name: 'Latte', description: 'Smooth blend of espresso and milk.', price: 160, image: 'images/latte.png' },
  { name: 'Americano', description: 'Espresso diluted with hot water.', price: 130, image: 'images/americano.png' },
  { name: 'Mocha', description: 'Espresso, chocolate syrup and steamed milk.', price: 170, image: 'images/mocha.png' },
  { name: 'Cold Brew', description: 'Slow-steeped coffee served chilled.', price: 180, image: 'images/coldbrew.png' },
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
    return subtotal + tax;
  };

  const handleOrder = () => {
    const total = calculateTotal();
    const orderId = 'ORD' + Math.floor(Math.random() * 100000);
    setOrderDetails({ id: orderId, total });
    setShowPopup(true);
    setQuantities(Array(menuItems.length).fill(0));
  };

  return (
    <div className="pageWrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="backgroundOverlay" />

      <div className="menuWrapper">
        <div className="scrollArea">
          {menuItems.map((item, index) => (
            <div key={index} className="menuItem">
              <img src={item.image} alt={item.name} className="image" />
              <div className="textContent">
                <div className="name">{item.name}</div>
                <div className="description">{item.description}</div>
                <div className="price">₹{item.price}</div>
              </div>
              <div className="controls">
                <button onClick={() => handleQuantityChange(index, -1)} className="btn">−</button>
                <span className="qty">{quantities[index]}</span>
                <button onClick={() => handleQuantityChange(index, 1)} className="btn">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="summary">
          <button onClick={handleOrder} className="orderButton">Place Order</button>
        </div>
      </div>

      {showPopup && (
        <div className="popupOverlay">
          <div className="popupBox">
            <div className="popupIcon">☕</div>
            <h2 className="popupTitle">Thank you for your order!</h2>
            <p className="popupText">Order ID: <strong>{orderDetails.id}</strong></p>
            <p className="popupText">Total(Taxes included): <strong>₹{orderDetails.total.toFixed(2)}</strong></p>
            <button className="closeBtn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
