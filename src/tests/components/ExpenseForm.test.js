import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../../tests/fixtures/expenses';
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  //const value = 'new desctiption';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0) // it is first input element in this component
    .simulate('change', { target: { value: 'new description' } });
  expect(wrapper.state('description')).toBe('new description');
});

test('should set note on textarea change', () => {
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', { target: { value } });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1) // point the second input element
    .simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe(value);
});
test('should set amount on input change with invalid value', () => {
  const value = '23.50989';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1) // point the second input element
    .simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  // onSubmitSpy('masa', 'osaka')
  // expect(onSubmitSpy).toHaveBeenCalledWith('masa')
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
});

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calenderFocused')).toBe(focused)
})