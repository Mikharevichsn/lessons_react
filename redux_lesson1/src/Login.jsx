import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/actions';

export const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const initAuthData = { login: '', password: '' };
  const [authData, setAuthData] = useState(initAuthData);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(authData);
    dispatch(login(authData));
  };

  useEffect(() => {
    if (user) {
      setAuthData(initAuthData);
    }
  }, [user]);

  const onChange = (event) => {
    setAuthData({
      ...authData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {!user && (
        <div>
          <form onSubmit={onSubmitHandler}>
            <label>
              Логин
              <input
                type='text'
                name='login'
                value={authData.login}
                onChange={onChange}
              />
            </label>
            <label>
              Пароль
              <input
                type='password'
                name='password'
                value={authData.password}
                onChange={onChange}
              />
            </label>
            <button type='submit'>Войти</button>
          </form>
        </div>
      )}
    </>
  );
};
