import moment from 'moment'

const expenses = [
  {
    id: '1',
    description: 'rent',
    note: 'last month',
    amount: 23499,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'dinner',
    note: 'this month',
    amount: 10099,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'pc',
    note: 'yesterday',
    amount: 200099,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
];

export default expenses