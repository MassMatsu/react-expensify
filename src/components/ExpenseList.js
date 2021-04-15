import React from 'react';
import { connect } from 'react-redux';
import { ExpenseItem } from '../components/index';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseItem key={expense.id} {...expense} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    //filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

// export default connect((state) => {
//   console.log(state)
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)
