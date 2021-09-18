import { Menu } from '../Menu';
import { asideMenuLinks } from '../../constants';
import './Layout.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='header'>CRM система</header>
      <section className='main-wrapper'>
        <aside className='left'>
          <Menu links={asideMenuLinks} />
        </aside>
        <main>{children}</main>
      </section>
      <footer className='footer'></footer>
    </>
  );
};
