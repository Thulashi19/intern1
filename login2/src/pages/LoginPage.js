import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (token) => {
    // Store the token (e.g., in local storage or a state management solution)
    localStorage.setItem('authToken', token);
    onLogin(true); // Update authentication state in App.js
    navigate('/dashboard');
  };

  return (
    <div>
      <LoginForm onLogin={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;