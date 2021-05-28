import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt }) => {
    expensesData[id] = {description, note, amount, createdAt}
  })
  database.ref('expenses').set(expensesData).then(() => done())
})

test('should setup remove action object', () => {
  const result = removeExpense(3);
  expect(result).toEqual({ type: 'REMOVE_EXPENSE', id: 3 });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[2].id
  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id 
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('should setup edit action object', () => {
  const result = editExpense(3, { description: 'coffee' });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: 3,
    updates: { description: 'coffee' },
  });
});

test('should setup add action object with provided values', () => {
  const expenseData = {
    description: 'coffee',
    amount: 232.99,
    createdAt: 12313131,
    note: 'this is note',
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenseData
  });
});


test('should add expense to database and store', (done) => {
  // create mock store
  const store = createMockStore({})
  
  const expenseData = {
    description: 'rent',
    amount: 232.99,
    createdAt: 12313131,
    note: 'this is note',
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    //check if store dispatch the expected action here
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    database.ref(`expenses/${actions[0].expense.id}`).once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
    
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const expenseDefault = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: '',
  }

  store.dispatch(startAddExpense({})).then(() => {
    //check if store dispatch the expected action here
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    })

    database.ref(`expenses/${actions[0].expense.id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault)
        done()
      })
  })
})

test('should setup expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({})

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done()
  })
})

