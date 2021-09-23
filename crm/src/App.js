import { useEffect } from 'react';
import {
  Switch, Route, useHistory, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from './containers/Layout';
import { LeadCreate } from './containers/LeadCreate';
import './App.scss';
import { LeadsList } from './containers/LeadsList/LeadsList';
import { LoginForm } from './containers/LoginForm/LoginForm';

function App() {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) history.push('/login');
  }, [user, location.pathname]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <h1>Главная</h1>
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/leads/create">
            <h1>Создать заявку</h1>
            <LeadCreate />
          </Route>
          <Route path="/leads">
            <h1>Список заявок</h1>
            <LeadsList />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
