import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // it is for datepicker on ExpenseListFilters and ExpenseForm component
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';


const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,

    document.getElementById('app')
  );
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in')
  } else {
    console.log('log out')
  }
})