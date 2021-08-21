import React, { useState, useEffect } from 'react'
import { api } from './api';
import { Catalog } from './Catalog';
import './App.scss';
import { Add } from './Add/Add';

export const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      const fetchResult = await api.get();
      if (fetchResult.success) setRestaurants(fetchResult.data);
      if (fetchResult.error) setError(fetchResult.message);
    };
    fetchData();
  }, []);

  
  return (
    <div>
      {error && <h3 className="error">{error}</h3>}
      <Catalog restaurants={restaurants} setRestaurants={setRestaurants} />
      <Add setRestaurants={setRestaurants} />
    </div>
  )
}
