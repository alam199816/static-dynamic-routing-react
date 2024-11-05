// src/pages/About.jsx
import React from 'react';
import Header from '../common/Header';
import '../common/content.css';

export default function About() {
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <h2 className="fade-in">About Us</h2>
        <p className="slide-in">Welcome to our website! We are dedicated to providing high-quality products that support a holistic and healthy lifestyle.</p>
        <p className="slide-in">Our mission is to bring the power of Ayurveda to your doorstep, promoting wellness and natural healing.</p>
        <p className="slide-in">We value transparency, sustainability, and customer satisfaction.</p>
      </div>
    </div>
  );
}
