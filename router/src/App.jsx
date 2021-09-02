import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PageComponent } from "./components/pages/PageComponent";
import './App.scss';
import { Blog, BlogDetail } from "./components/pages/Blog";


function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route exact path="/">
            <PageComponent title="Главная страница" />
          </Route>
          <Route exact path="/about">
            <PageComponent title="О нас123" />
          </Route>
          <Route path="/contact">
            <PageComponent title="Контакты" />
          </Route>
          <Route path="/blog/:slug">
            <BlogDetail />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route>
            <PageComponent title="Нет такой страницы" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
