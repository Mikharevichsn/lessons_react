import { Switch, Route } from 'react-router-dom';
import { Menu } from './containers/Menu/Menu';
import { asideMenuLinks } from './constants';

function App() {
  return (
    <>
      <div className='App'>
        <Menu links={asideMenuLinks} />
        <Switch>
          <Route exact path='/'>
            <h1>Главная</h1>
          </Route>
          <Route path='/leads'>
            <h1>Список заявок</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
