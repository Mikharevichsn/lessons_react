import { useDispatch } from 'react-redux';
import { addToCart, removeFromCatalog } from '../redux/actions';

export const Card = ({ item = {}, className }) => {
  const dispatch = useDispatch();
  const { id, name, description, price } = item;

  const _removeFromCatalog = () => {
    dispatch(removeFromCatalog(id));
  };

  const _addToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <li className={className}>
      <h3>{name}</h3>
      <span style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>
        {price}
      </span>
      <p>{description}</p>
      <button onClick={_addToCart}>Добавить в корзину</button>
      <button onClick={_removeFromCatalog}>Не хочу покупать</button>
    </li>
  );
};
