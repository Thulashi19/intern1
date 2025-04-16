import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=12'); // Replace with your actual API endpoint
        setImages(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch images.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.title} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;