import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filters values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month'),
  });
})
test('should setup filters values with text updated', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'rent'})
  expect(state).toEqual({
    text: 'rent',
    sortBy: 'date',
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month'),
  });
})
test('should setup sortBy to date', () => {
  const currentState = { // make the state value state.sortBy to 'amount' to test out if reducer works
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month'),
  });
})
test('should setup sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
})
test('should setup filters values with startDate updated', () => {
  const startDate = moment(0)
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: startDate })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: startDate, 
    endDate: moment().endOf('month'),
  });
})
test('should setup filters values with endDate updated', () => {
  const endDate = moment(0)
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: endDate })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: endDate,
  });
})
