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

console.log(store.getState());
store.dispatch(
  addExpense({
    description: 'water bill',
    amount: 4500,
    createdAt: 1617887007628,
  })
);
store.dispatch(
  addExpense({ description: 'gas bill', amount: 150, createdAt: 1617887077628 })
);
store.dispatch(
  addExpense({ description: 'rent', amount: 11000, createdAt: 1617887077628 })
);
store.dispatch(setTextFilter(''));

console.log(store.getState());

const state = store.getState();
const filteredExpense = getVisibleExpenses(state.expenses, state.filters);

console.log(filteredExpense);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,

  document.getElementById('app')
);
