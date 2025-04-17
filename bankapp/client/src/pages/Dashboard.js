import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=bank&per_page=1', {
      headers: {
        Authorization: 'YOUR_PEXELS_API_KEY'
      }
    })
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.photos[0].src.medium);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#fffbe6',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Bank Related"
            style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
          />
        )}
        <h2 style={{ color: '#f1c40f', marginBottom: '10px' }}>
          🌟 Welcome to Your Dashboard
        </h2>
        <p style={{ fontSize: '18px', color: '#333' }}>
          You are successfully logged in!
        </p>
        <p style={{ fontSize: '14px', color: '#777', marginTop: '10px' }}>
          Here you can manage your bank account, view transactions, and much more.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
