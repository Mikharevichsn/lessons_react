import { Switch, Route } from 'react-router-dom';
import { Layout } from './containers/Layout';
import './App.scss';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <h1>Главная</h1>
          </Route>
          <Route path='/leads'>
            <h1>Список заявок</h1>
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
