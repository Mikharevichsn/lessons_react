import { useSelector } from 'react-redux';
import { Menu } from '../Menu';
import { asideMenuLinks } from '../../constants';
import './Layout.scss';
import { User } from '../User/User';

export const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <header className="header">
        CRM система
        {user && <User />}
      </header>
      <section className="main-wrapper">
        <aside className="left">
          <Menu links={asideMenuLinks} />
        </aside>
        <main>{children}</main>
      </section>
      <footer className="footer" />
    </>
  );
};
