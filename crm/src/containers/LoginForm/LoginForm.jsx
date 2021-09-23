/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions';

export const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });

  useEffect(() => {
    if (user) history.push('/');
  }, [user]);

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
    </div>
  );
};
