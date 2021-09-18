import { useState } from 'react';
import shortid from 'shortid';

export const LeadCreate = () => {
  const [formData, setFormData] = useState({
    id: shortid.generate(),
    name: '',
    goods: '',
    cost: '',
  });

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('formData = ', formData);
  };

  return (
    <div>
      <h4>Добавление заявки:</h4>
      <form onSubmit={onSubmit}>
        <label>
          Название
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Товары
          <input
            type='text'
            name='goods'
            value={formData.goods}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Сумма
          <input
            type='text'
            name='cost'
            value={formData.cost}
            onChange={onChange}
            required
          />
        </label>
        <button type='submit'>Создать</button>
      </form>
    </div>
  );
};
