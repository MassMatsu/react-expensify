import React from 'react';
import { connect } from 'react-redux';
import { ExpenseForm } from '../components/index';
import { addExpense } from '../actions/expenses';
import {startAddExpense} from '../actions/expenses'

export class CreateExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
