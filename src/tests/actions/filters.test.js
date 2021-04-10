import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('should setup setTextFilter action object', () => {
  const result = setTextFilter('rent');
  expect(result).toEqual({ type: 'SET_TEXT_FILTER', text: 'rent' });
});
test('should setup setTextFilter action object', () => {
  const result = setTextFilter();
  expect(result).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});
test('should setup sortByDate action object', () => {
  const result = sortByDate();
  expect(result).toEqual({ type: 'SORT_BY_DATE' });
});
test('should setup sortByAmount action object', () => {
  const result = sortByAmount();
  expect(result).toEqual({ type: 'SORT_BY_AMOUNT' });
});
test('should setup setStartDate action object', () => {
  const startDate = moment().valueOf();
  const result = setStartDate(startDate);
  expect(result).toEqual({ type: 'SET_START_DATE', startDate: startDate });
});
test('should setup setEndDate action object', () => {
  const endDate = moment().valueOf();
  const result = setEndDate(endDate);
  expect(result).toEqual({ type: 'SET_END_DATE', endDate: endDate });
});
