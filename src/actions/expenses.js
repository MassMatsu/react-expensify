import uuid from 'uuid'
import database from '../firebase/firebase'

const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {description, note, amount, createdAt}

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id: id,
});

const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExpense(id))
    })
  }
}

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates,
});

const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses: expenses
})

const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = []
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses))
    }) 
  }
}

export { addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense};