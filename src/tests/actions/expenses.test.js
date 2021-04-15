import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove action object', () => {
  const result = removeExpense(3);
  expect(result).toEqual({ type: 'REMOVE_EXPENSE', id: 3 });
});
test('should setup edit action object', () => {
  const result = editExpense(3, { description: 'coffee' });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: 3,
    updates: { description: 'coffee' },
  });
});
test('should setup add action object', () => {
  const expenseData = {
    description: 'coffee',
    amount: 232.99,
    createdAt: 12313131,
    note: 'this is note',
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});
test('should setup add action object with default values', () => {
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
