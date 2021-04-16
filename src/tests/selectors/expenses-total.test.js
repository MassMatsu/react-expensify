import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = getExpensesTotal(expenses);
  expect(result).toBe(0);
});

test('should correctlly add up single expense', () => {
  const array = [expenses[0]]
  const result = getExpensesTotal(array)
  expect(result).toBe(23499);
});

test('should correctly add up multiple expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(233697);
});
