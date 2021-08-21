import React, { useState } from 'react';
import { api } from '../api';

export const Add = ({ setRestaurants }) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const defaultResInstance = {
    name: '',
    description: '',
  };
  const [restInstance, setRestInstance] = useState(defaultResInstance);

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
    if (fetchResult.success) {
      setRestaurants(state => ([ ...state, { id: fetchResult.data.id, ...restInstance } ]));
      setRestInstance(defaultResInstance);
      setIsFormShown(false);
    }

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
