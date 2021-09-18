import { Switch, Route } from 'react-router-dom';
import { Layout } from './containers/Layout';
import { LeadCreate } from './containers/LeadCreate';
import './App.scss';
import { LeadsList } from './containers/LeadsList/LeadsList';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <h1>Главная</h1>
          </Route>
          <Route path='/leads/create'>
            <h1>Создать заявку</h1>
            <LeadCreate />
          </Route>
          <Route path='/leads'>
            <h1>Список заявок</h1>
            <LeadsList />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
