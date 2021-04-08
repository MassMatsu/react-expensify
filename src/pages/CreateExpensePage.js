import React from 'react';
import {connect} from 'react-redux'
import {ExpenseForm} from '../components/index'
import {addExpense} from '../actions/expenses'

const CreateExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(addExpense(expense))
      props.history.push('/')    // navigate a user to home page when the form submit is done
    }}/>
  </div>
  
  );


export default connect()(CreateExpensePage)