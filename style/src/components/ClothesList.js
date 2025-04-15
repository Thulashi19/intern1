import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClothesList.css'; // import the CSS file

const ClothesList = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    //axios.get("https://fakestoreapi.com/products/category/men's clothing")

      .then((response) => {
        setClothes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading clothes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="clothes-container">
      {clothes.map((item) => (
        <div key={item.id} className="cloth-card">
          <img src={item.image} alt={item.title} className="cloth-image" />
          <div className="cloth-title">{item.title}</div>
          <div className="cloth-price">${item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ClothesList;
