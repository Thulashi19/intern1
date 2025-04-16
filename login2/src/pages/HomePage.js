import React from 'react';
import ImageGallery from '../components/ImageGallery';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to the Gallery</h1>
        <p className="subtitle">Explore our amazing collection of images.</p>
      </header>
      <main className="homepage-content">
        <ImageGallery></ImageGallery>
      </main>
    </div>
  );
};

export default HomePage;