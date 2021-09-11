import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementCartItem } from '../redux/actions';
import './Cart.scss';

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className='cart'>
      <ol className='cart-list'>
        {cart?.map(({ id, name, price, count, total }) => (
          <li key={id}>
            <span>{name}</span>
            <span>
              {count}
              <button onClick={() => dispatch(incrementCartItem(id))}>+</button>
            </span>
            <span>{total}</span>
            <span>{price}</span>
            <button onClick={() => dispatch(removeFromCart(id))}>
              Удалить
            </button>
          </li>
        ))}
      </ol>

      <h4>Итого: {cart.reduce((acc, cur) => acc + cur.total, 0)}</h4>
    </div>
  );
};
