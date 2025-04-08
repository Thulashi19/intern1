import React from 'react';
import './index.css'; // Importing the CSS file for the footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Thulashi Flower Shop. All Rights Reserved.</p>
      
      <div className="footer-links">
        <p>
          <a href="mailto:thulashi.flowershop@example.com" className="footer-link">Email Us</a> | 
          <a href="https://facebook.com/thulashiflowershop" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
        </p>
      </div>
      
      <p className="footer-privacy">
        <a href="/privacy" className="footer-link">Privacy Policy</a> | 
        <a href="/terms" className="footer-link">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
