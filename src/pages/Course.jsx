// src/pages/Course.jsx
import React from 'react';
import Header from '../common/Header';
import '../common/content.css';

export default function Course() {
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <h2 className="fade-in">Our Courses</h2>
        <p className="slide-in">Welcome to our course page! Here, you’ll find a diverse selection of educational programs designed to help you gain new skills.</p>
        <p className="slide-in">Our courses are crafted by industry experts who bring real-world experience and in-depth understanding to each lesson.</p>
        <p className="slide-in">We offer flexible learning options to fit your schedule, allowing you to study at your own pace.</p>
      </div>
    </div>
  );
}
