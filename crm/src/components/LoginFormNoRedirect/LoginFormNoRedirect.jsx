/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions';

export const LoginFormNoRedirect = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });

  const onChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginData));
  };

  return (
    <div className="loginWrapper">
      {user ? <h2>Вы авторизованы!</h2> : (
        <form onSubmit={onSubmit}>
          <label>
            Логин:
            <input type="text" name="login" value={loginData.login} onChange={onChange} />
          </label>
          <label>
            Пароль:
            <input type="password" name="password" value={loginData.password} onChange={onChange} />
          </label>
          <button type="submit">Войти</button>
        </form>
      )}

    </div>
  );
};
