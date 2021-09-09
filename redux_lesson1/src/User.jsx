import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/actions';
import './User.css';

export const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      {user && (
        <div className='user'>
          {user.userName}
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  );
};
