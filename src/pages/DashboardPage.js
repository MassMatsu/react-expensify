import React from 'react';
import { ExpenseList } from '../components/index';
import { ExpenseListFilters, ExpensesSummary } from '../components/index';

const DashboardPage = () => (
  <div>
    <ExpensesSummary/>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
