import React from 'react';
import img2 from "./img2.avif"; // Importing the first image
import img3 from "./img3.jpg"; 
const About = () => {
  return (
    <div className="about-container">
      <h1>About Thulashi Flower Shop</h1>
      <div className="about-image-container">
        <img 
          src={img2} 
          alt="Flower Shop" 
          className="about-image" 
        />
      </div>
      <p>
        Welcome to <strong>Thulashi Flower Shop</strong>, your go-to destination for the most beautiful, fresh, and exotic flowers in town! We specialize in providing high-quality flowers for every occasion – be it weddings, birthdays, anniversaries, or simply a gesture of love.
      </p>
      <p>
        At Thulashi Flower Shop, we are passionate about creating memorable experiences with our carefully curated flower arrangements. Our flowers are hand-picked from trusted farms to ensure that you get only the best, most vibrant blooms.
      </p>
      <div className="about-image-container">
        <img 
          src={img3} 
          alt="Flower Arrangements" 
          className="about-image" 
        />
      </div>
      <p>
        Our mission is to bring joy, beauty, and fragrance into your lives through our flowers, and we strive to make every moment special with our personalized flower arrangements.
      </p>
      <p>
        Visit us to explore our collection and let us help you pick the perfect flowers for any event or special moment in your life.
      </p>
    </div>
  );
};

export default About;
