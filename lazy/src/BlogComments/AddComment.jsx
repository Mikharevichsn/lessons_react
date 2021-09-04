import React, { useState } from 'react';
import dayjs from 'dayjs';
import './AddComment.scss';

const AddComment = ({ setList }) => {
  const [formData, setFormData] = useState({});

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { v4: uuid } = await import('uuid');
    const data = { ...formData };
    data.date = dayjs().format('DD.MM.YYYY HH:MM');
    data.id = uuid();
    setList((state) => [...state, data]);
  };

  return (
    <div className='add-comment'>
      <form onSubmit={onSubmitHandler}>
        <label>
          Автор:
          <input
            type='text'
            name='author'
            value={formData.author || ''}
            onChange={onChange}
            placeholder='Введите ваше имя'
          />
        </label>
        <label>
          Комментарий:
          <textarea
            name='text'
            cols='30'
            rows='10'
            value={formData.text || ''}
            onChange={onChange}
            placeholder='Введите ваш коммент'
          ></textarea>
        </label>
        <button type='submit'>Добавить</button>
      </form>
    </div>
  );
};

export default AddComment;