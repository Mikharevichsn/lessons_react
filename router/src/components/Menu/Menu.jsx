import { NavLink } from 'react-router-dom';
import './style.scss';

export const Menu = () => {
  return (
    <>
      <nav className='menu'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName="active">Главная</NavLink>
          </li>
          <li>
            <NavLink to='/blog' activeClassName="active">Блог</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName="active">О нас</NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName="active">Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
