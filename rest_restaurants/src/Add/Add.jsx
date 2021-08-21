import React, { useState } from 'react';
import { api } from '../api';

export const Add = ({ setRestaurants }) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [restInstance, setRestInstance] = useState({
    name: '',
    description: '',
  });

  const onChange = (e) => {
    setRestInstance({
      ...restInstance,
      [e.target.name]: e.target.value,
    });

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!restInstance.name) return alert('Имя - обязательно!');

    const fetchResult = await api.post(restInstance);
    if (fetchResult.success) setRestaurants(state => ([ ...state, { ...restInstance } ]));

  }
  return (
    <div>
      <button type="button" onClick={() => setIsFormShown(true)}>Добавить</button>
      {isFormShown && <>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" value={restInstance.name} onChange={onChange} required />
          <input type="text" name="description" value={restInstance.description} onChange={onChange} />
          <button type="submit">Добавить ресторан</button>
        </form>
      </>}
      
    </div>
  )
}
