// src/pages/Home.jsx
import React from 'react';
import Header from '../common/Header';
import '../common/content.css';// Import custom CSS for additional styling and animations

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h2 className="fade-in">Welcome to Our Home Page</h2>
        <p className="slide-in">Welcome! We’re thrilled to have you here. Our mission is to provide high-quality products and services that make a difference in people’s lives.</p>
        <p className="slide-in">We take pride in our commitment to quality and customer satisfaction, ensuring that every product we offer meets the highest standards.</p>
        <p className="slide-in">Explore our wide range of offerings, each designed to cater to unique needs and preferences. From innovative solutions to everyday essentials, we have something for everyone.</p>
        <p className="slide-in">Our team is passionate about creating an exceptional experience for every visitor. Whether you’re here to learn more about us or to explore our products, we’re here to help.</p>
        <p className="slide-in">Stay updated with the latest news, promotions, and product launches by checking back regularly or signing up for our newsletter.</p>
        <p className="slide-in">Thank you for visiting our home page. We look forward to being a part of your journey!</p>
      </div>
    </div>
  );
}
