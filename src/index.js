import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'About',
    element: <About />
  },
  {
    path: 'Course',
    element: <Course />
  },
  {
    path: 'Blog',
    element: <Blog />
  },
  {
    path: 'Blog/:id',
    element: <BlogDetail/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

reportWebVitals();
