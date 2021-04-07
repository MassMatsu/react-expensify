import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

console.log(store.getState());
store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('bill'));

console.log(store.getState());

const state = store.getState()
const filteredExpense = getVisibleExpenses(state.expenses, state.filters)

console.log(filteredExpense);

ReactDOM.render(AppRouter, document.getElementById('app'));
