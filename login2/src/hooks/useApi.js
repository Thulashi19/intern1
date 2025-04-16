import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'get', initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios[method](url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]); // Re-fetch if URL or method changes

  return { data, loading, error };
};

export default useApi;