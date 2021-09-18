import { NavLink } from 'react-router-dom';

export const Menu = ({ links = [] }) => {
  return (
    <>
      <nav>
        <ul>
          {links.map((link) => (
            <li>
              <NavLink
                exact={link.exact}
                to={link.path}
                className='link'
                activeClassName='link-activ'
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
