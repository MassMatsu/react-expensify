import React from 'react';
import { ExpenseList } from '../components/index';
import { ExpenseListFilters } from '../components/index';

const DashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
