import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { addLead } from '../../redux/actions';

export const LeadCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getInitFormData = () => ({
    id: shortid.generate(),
    name: '',
    goods: '',
    cost: '',
  });
  const [formData, setFormData] = useState(getInitFormData());

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addLead(formData));
    setFormData(getInitFormData());
    history.push('./leads');
  };

  return (
    <div>
      <h4>Добавление заявки:</h4>
      <form onSubmit={onSubmit}>
        <label>
          Название
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Товары
          <input
            type="text"
            name="goods"
            value={formData.goods}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Сумма
          <input
            type="text"
            name="cost"
            value={formData.cost}
            onChange={onChange}
            required
          />
        </label>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};
