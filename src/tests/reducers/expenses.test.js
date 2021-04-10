import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should setup default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});
test('should remove expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should not remove expense with not id matching', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '-5',
  });
  expect(state).toEqual([...expenses]);
});
test('should add expense', () => {
  const newExpense = {id: '4', description: 'lunch', amount: 5400, note: '', createdAt: 500000}
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});
test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {note: '4 days ago'}
  }
  const state = expensesReducer(expenses, action);
  expect(state[2].note).toBe('4 days ago')
});
test('should not edit any expense by with no id matching', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-5',
    updates: {note: '4 days ago'}
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});
