import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  DashboardPage,
  CreateExpensePage,
  EditExpensePage,
  HelpPage,
  NotFoundPage,
} from '../pages/index';
import { Header } from '../components/index';

const AppRouter = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/create' component={CreateExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
