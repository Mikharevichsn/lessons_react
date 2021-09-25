import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

export const User = () => {
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
  };

  const user = useSelector((state) => state.user);
  return (
    <div>
      <h2>{user?.name}</h2>
      <button type="button" onClick={userLogout}>Выйти</button>
    </div>
  );
};
