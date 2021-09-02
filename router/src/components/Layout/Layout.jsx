import { Menu } from '../Menu';
import './style.scss';

export const Layout = ({ children }) => {
  return (
    <div className='layout wrapper'>
      <header className='header'>Супер Блог</header>
      <div className='main-wrapper'>
        <aside className='aside'>
          <Menu />
        </aside>
        <main className='main'>{children}</main>
      </div>
      <footer className='footer'>
        я футер
        <Menu />
      </footer>
    </div>
  );
};
