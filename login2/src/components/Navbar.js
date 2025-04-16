import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clear tokens)
    if (onLogout) {
      onLogout();
    }
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faCamera} className="navbar-icon" />
          Gallery
        </Link>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/" className="nav-link">Home</Link></li>
        {!isAuthenticated && (
          <>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
            <li><button onClick={handleLogout} className="nav-button">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;