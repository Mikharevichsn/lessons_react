import { Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LeadCreate } from './components/LeadCreate';
import './App.scss';
import { LeadsList } from './components/LeadsList/LeadsList';
import { LoginForm } from './components/LoginForm/LoginForm';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Layout>
        <Switch>

          <PrivateRoute exact path="/">
            <h1>Главная</h1>
          </PrivateRoute>

          <PublicRoute path="/login" needRedirect>
            <LoginForm />
          </PublicRoute>

          <PrivateRoute path="/leads/create">
            <h1>Создать заявку</h1>
            <LeadCreate />
          </PrivateRoute>

          <PrivateRoute path="/leads">
            <h1>Список заявок</h1>
            <LeadsList />
          </PrivateRoute>

        </Switch>
      </Layout>
    </>
  );
}

export default App;
