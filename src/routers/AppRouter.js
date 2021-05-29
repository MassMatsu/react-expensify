import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import {
  LoginPage,
  DashboardPage,
  CreateExpensePage,
  EditExpensePage,
  HelpPage,
  NotFoundPage,
} from '../pages/index';
import { Header } from '../components/index';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}> 
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/create' component={CreateExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
