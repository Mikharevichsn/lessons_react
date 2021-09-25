import { NavLink } from 'react-router-dom';

export const Menu = ({ links = [] }) => (
  <>
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              exact={link.exact}
              to={link.path}
              className="link"
              activeClassName="link-activ"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </>
);
