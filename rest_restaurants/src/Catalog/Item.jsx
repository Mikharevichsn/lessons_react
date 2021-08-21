import React, { useState } from 'react';
import { api } from '../api';

export const Item = ({ id, name, description, setRestaurants }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edditedData, setEdditedData] = useState({
    id,
    name,
    description,
  });

  const deleteRestaurant = async (id) => {
    const fetchResult = await api.delete(id);
    if (fetchResult.success) {
      // setRestaurants(restaurants.filter(el => el.id !== id));
      setRestaurants((prevState) => prevState.filter((el) => el.id !== id));
    }
  };

  const onChange = (e) => {
    setEdditedData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!edditedData.name) return alert('Имя - обязательно!');

    const fetchResult = await api.put(id, edditedData);
    if (fetchResult.success) setRestaurants(state => (state.map((el) => {
      if (el.id === id) return edditedData;
      return el;
    })));

    setIsEdit(false);

  }

  return (
    <li className='card'>
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

{isEdit && (
      <>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" value={edditedData.name} onChange={onChange} required />
          <input type="text" name="description" value={edditedData.description} onChange={onChange} />
          <button type="submit">Сохранить изменения</button>
        </form>
      </>
    )}
  </li>
  )
}
