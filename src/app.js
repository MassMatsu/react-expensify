import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // it is for datepicker on ExpenseListFilters and ExpenseForm component

import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,

  document.getElementById('app')
);
