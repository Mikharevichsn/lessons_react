import React, { useState } from 'react';
import { api } from '../api';

export const Item = ({ id, name, description, setRestaurants }) => {
  const [isEdit, setIsEdit] = useState(false);

  const deleteRestaurant = async (id) => {
    const fetchResult = await api.delete(id);
    if (fetchResult.success) {
      // setRestaurants(restaurants.filter(el => el.id !== id));
      setRestaurants((prevState) => prevState.filter((el) => el.id !== id));
    }
  };

  return (
    <li className='card' key={id}>
    {!isEdit && (
      <>
        <h4>{name}</h4>
        <p>{description}</p>
        <button type='button' onClick={() => deleteRestaurant(id)}>
          Удалить
        </button>
        <button type='button' onClick={() => setIsEdit(true)}>
          Редактировать
        </button>
      </>
    )}
  </li>
  )
}
